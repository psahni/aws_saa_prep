### What is Kubernetes?
Kubernetes (K8s) is a high-availability rapid deployment and container orchestration framework that allows you to easily manage and automate your deployments in one place. Because it makes heavy use of containers, your applications stay up-to-date with no downtime and always have safe and reliable access to the dependencies they require. Learn more on the official Kubernetes website

### How does it work?
Kubernetes automates the management of containerized applications. It provides a centralized control plane to manage containers and the underlying infrastructure, automate scaling, rollouts and rollbacks, and more. The platform abstracts away the underlying infrastructure and provides a unified way of managing containers and applications, making it easier for developers to build, deploy, and run applications at scale.

### [REF]
* https://support.atlassian.com/bitbucket-cloud/docs/deploy-to-kubernetes/
* https://www.freecodecamp.org/news/how-to-securely-deploy-to-kubernetes-from-bitbucket-pipelines-78e668f331b9/

* Create bitbucket-pipelines.yml
* Build and push docker image
* Add docker hub repo variables in your repository  Pipelines  >  Repository variables

```
pipelines:
  default:
    - step:
        name: Test
        script:
          - npm install
          - npm test
 
    - step:
        name: Build
        script:
          - export IMAGE_NAME=$DOCKER_HUB_USERNAME/$APPLICATION_NAME:$BITBUCKET_COMMIT
          # build the Docker image (this will use the Dockerfile in the root of the repo)
          - docker build -t $IMAGE_NAME .
          # authenticate with the Docker Hub registry
          - docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_HUB_PASSWORD
          # push the new Docker image to the Docker registry
          - docker push $IMAGE_NAME
        services:
          - docker
    - step:
        name: Deploy
        deployment: production
        script:
          - sed -i "s|{{image}}|$DOCKER_HUB_USERNAME/$APPLICATION_NAME:$BITBUCKET_COMMIT|g" deployment.yml
          - pipe: atlassian/kubectl-run:1.1.2
            variables:
              KUBE_CONFIG: $KUBE_CONFIG
              KUBECTL_COMMAND: 'apply'
              RESOURCE_PATH: 'deployment.yml'

```

### Bitbucket pipeline demo
https://www.youtube.com/watch?v=wJv3ZGwxQPQ

### Pipeline Settings explained
https://support.atlassian.com/bitbucket-cloud/docs/pipeline-start-conditions/

### Deploy to Heroku
https://support.atlassian.com/bitbucket-cloud/docs/deploy-to-heroku/

### What is pipe in Bitbucket
https://support.atlassian.com/bitbucket-cloud/docs/what-are-pipes/

- A pipe is a custom Docker image for a container, which contains a script to perform a task. There are a bunch of available Pipes, but you can write your own too.
- A pipe is made up of a few different files:
   - A script, or binary, the code that performs the task.
   - A Dockerfile, which tells us how to build the Docker container that runs your script.
