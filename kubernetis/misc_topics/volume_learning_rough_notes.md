K volumes

local volumes
cloud provider volumes

pod life time -> vol remains
volumes are pod specific

if you want to survive the vol on delete of pod

k volumes
driver types support
diff storage systems

emptyDir -> this will create separate diretory for the pod

pod1 => dir1
pod2 => dir2

so when pod1 goes down, data which was saved by the pod in dir1, will not be accesiible by dir2

hostPath -> sepecific to one host machine

// under pod
volumes:
  - name: story-volume
    hostPath:
      path: /data
      type: DirectoryOrCreate


kubectl apply -f ..

But still an issue if your pod is running on diff node -> pod independence
One node env
Not for multiple nodes

### CSI type
- Supported by AWS EFS
- You can add any storage type as long as the storage type has storage driver
- AWS EFS CSI driver is available

### Persistent Volumes
- Pod and node independent data
- PV will always persist
- More than indepedent storage
- Total detachment from pod life cycle
- Full power over how volume is configure (Administration)
- They are indepdent of the nodes, separate resources
- POD and Node claim the volume
- It will not be on cluster nodes, rather on some cloud storage service
- They are standalone resource, not attached to specific POD

`host-pv.yaml`

```
  apiVersion: v1
  kind: PersistentVolume
  metadata:
    name: host-pv
  spec:
    capacity: 
      storage: 4Gi
    volumeMode: Block // It can be FileSystem also
    storageClassName: standard
    accessModes:
      - ReadWriteOnce // For single node
      - ReadOnlyMany 
      - ReadWriteMany 
    hostPath: 
      path: /data
      type: DirectoryOrCreate
```


### Persistent Volume Claim
```
  apiVersion: v1
  kind: PersistentVolumeClaim
  metadata:
    name: host-pv
  spec:
    volumeName: host-pv
    accessModes:
      - ReadWriteOnce
    storageClassName: standard
    resources:
      requests:
        storage: 1Gi

```
This is just a claim. We have to make connection with POD.

In deployment.yaml

```
volumes:
  - name: story-volume
    peristentVolumeClaim:
      claimName: host-pvc
```

Now this vol not just created for the pod, but for the entire cluster

### Storage Classes
- How storage should be provisioned
- Default is standard


- Apply the host-pvc and host-pvc-claim yaml
- `kubectl get pvc` -> To check claims
- Now deployment pods should be able to access the volumes
- So now data will never be lost
- For temp app data, pod volumes are enough

### Normal Volume vs Persistent Volumes

- The basic idea is when container restarts and come back to running, it should not lose data


### Env Variables

```
  spec:
    containers:
      - name: story
        image: ...
        env:
          - name: FOLDER
            value: 'my_dir'
```

access it `process.env.FOLDER`

env.yaml
```
  apiVersion: v1
  kind: ConfigMap
  metadata:
    name: data-store-env
  data:
    folder: 'my_dir'
    enableFeature: true
```

- apply it

`kubectel get configmap`



```
  spec:
    containers:
      - name: story
        image: ...
        env:
          - name: FOLDER
            valueFrom: 
              configMapKeyRef:
                name: data-store-env
                key: folder
```