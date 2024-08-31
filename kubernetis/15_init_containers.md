### Init Containers

* Run before the app containers
* Contain setup scripts
* Can be multiple
* All init containers executes, then main container starts
* restartPolicy: Never - pod never restarts

```
spec:
  initContainers:
    - name: init-db
      image: busybox:1.31
      command: ['sh', '-c', 'echo -e "Checking for db availability"']
```


### Side Car Containers

* Sidecar containers are a popular pattern in Kubernetes that enhance the functionality of a main container without changing its code.
* A sidecar container is an additional container that runs alongside the main container in a pod. It shares the same lifecycle, network namespace, and storage volumes as the main container.
* Sidecars extend or enhance the functionality of the main container without modifying it. They're used to separate concerns and keep the main container focused on its primary task


* Runs in the same pod as the main container
* Shares the same network and storage
* Can communicate with the main container via localhost
* Starts, stops, and scales with the main container

* Ex: Logging and monitoring
* Service mesh implementations (e.g., Istio)
* Security (e.g., encryption, authentication)
* Configuration management

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-app
spec:
  volumes:
  - name: logs
    emptyDir: {}
  containers:
  - name: web-app
    image: nginx:latest
    ports:
    - containerPort: 80
  - name: log-sidecar
    image: log-collector:latest
    volumeMounts:
    - name: logs
      mountPath: /var/log/nginx
```

`log-sidecar` container collects logs from the web-app container.

Separation of concerns: Each container focuses on a specific task
Reusability: Sidecar containers can be reused across different applications