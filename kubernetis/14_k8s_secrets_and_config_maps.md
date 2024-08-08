### Kubernetes Secrets

* Create K8s Secrests Menifest

```
apiVersion: v1
kind: Secret
metadata:
  name: mysql-db-password
type: Opaque
data:
  db-password: e3jklqw4
  db-username: bob
  db-host: 
```

Then in mysql deployment file, you can give secret key password:-

```
..
spec:
  containers:
    - name: mysql
      image: mysql:5.6
      env:
        - name: MYSQL_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysql-db-password
              key: db-password
```


### Config Maps
* Centralized location for configuration data on the cluster

```
spec:
    containers:
    - name: ubuntu-container
      image: ubuntu
      command: ["sleep", "infinity"]
      env:
        - name: SECRET_VALUE
          valueFrom:
            secretKeyRef:
              name: my-secret
              key: string-value
        - name: CONFIG_VALUE
          valueFrom:
            configMapKeyRef:
              name: my-configmap
              key: number-value
```

* You can use configMap for POD that mounts a ConfigMap in a volume
* 

### References
https://www.baeldung.com/ops/kubernetes-configmaps-secrets
