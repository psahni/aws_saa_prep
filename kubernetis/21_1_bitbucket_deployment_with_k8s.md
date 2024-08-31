### Bitbucket deployment pipeline with a Kubernetes cluster. 
This setup allows you to automate the process of building, testing, and deploying your application to a Kubernetes cluster whenever changes are pushed to your Bitbucket repository.

Here's an overview of the process:

1. Developer pushes code to Bitbucket repository
2. Bitbucket Pipelines is triggered
3. Pipeline builds the application and creates a Docker image
4. Image is pushed to a container registry
5. Kubernetes manifests are updated with the new image tag
6. Application is deployed to the Kubernetes cluster

Now, let's go through a demo with example code:

1. Bitbucket Pipeline Configuration (bitbucket-pipelines.yml):

```yaml
image: atlassian/default-image:3

definitions:
  steps:
    - step: &build-push-image
        name: Build and push Docker image
        script:
          - export IMAGE_NAME=$DOCKER_HUB_USERNAME/myapp:$BITBUCKET_BUILD_NUMBER
          - docker build -t $IMAGE_NAME .
          - echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin
          - docker push $IMAGE_NAME
    - step: &deploy-to-k8s
        name: Deploy to Kubernetes
        script:
          - pipe: atlassian/kubectl-run:1.1.2
            variables:
              KUBE_CONFIG: $KUBE_CONFIG
              KUBECTL_COMMAND: 'set image deployment/myapp myapp=$DOCKER_HUB_USERNAME/myapp:$BITBUCKET_BUILD_NUMBER'
          - pipe: atlassian/kubectl-run:1.1.2
            variables:
              KUBE_CONFIG: $KUBE_CONFIG
              KUBECTL_COMMAND: 'rollout status deployment/myapp'

pipelines:
  branches:
    main:
      - step: *build-push-image
      - step: *deploy-to-k8s
```

2. Dockerfile for the application:

```Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

3. Kubernetes Deployment Manifest (k8s-deployment.yaml):

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: your-docker-hub-username/myapp:latest
        ports:
        - containerPort: 3000
```

4. Kubernetes Service Manifest (k8s-service.yaml):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

To set up this pipeline:

1. Add the `bitbucket-pipelines.yml` file to your repository.
2. Set up the following repository variables in Bitbucket:
   - DOCKER_HUB_USERNAME
   - DOCKER_HUB_PASSWORD
   - KUBE_CONFIG (base64 encoded kubeconfig file)

3. Ensure your Kubernetes cluster is set up and accessible.
4. Apply the Kubernetes manifests to your cluster:
   ```
   kubectl apply -f k8s-deployment.yaml
   kubectl apply -f k8s-service.yaml
   ```

5. Push changes to the main branch of your Bitbucket repository.

When you push changes to the main branch, the pipeline will:
1. Build a Docker image of your application
2. Push the image to Docker Hub
3. Update the Kubernetes deployment with the new image
4. Wait for the rollout to complete

This setup provides a streamlined CI/CD process for deploying your application to a Kubernetes cluster using Bitbucket Pipelines.

