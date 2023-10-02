`pod-definition.yml`

```
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    type: front-end
spec:
  containers:
    - name: nginx-container
      image: nginx

```

* `kubectl create -f pod-definition.yml`
* `kubectl get pods`
* `kubectl get pods -o wide`
* `kubdectrl describe pod <name-of-the-pod>`

```
apiVersion: v1
kind: Pod
metadata:
  name: postgres
  labels:
    tier: db-tier
spec:
  containers:
    - name: postgres
      image: postgres
      env:
        - name: POSTGRES_PASSWORD
          value: mysecretpassword

```

* `kubectl run redis --image=redis123 --dry-run -o yaml > redis.yaml`

#### Edit the image name
* Open the yaml file
* Edit the changes
* `kubectl apply -f redis.yaml`

