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