### Stateful apps

* Container that need persistent state across container life cycles. Eg: Databases
* 3 built in resource types

- Storage class
  - AWS EBS CSI
- Persistent Volume
  - Low level presentation of storage device. It can be static or dynamic
- Persistent Volume Claim
  - Binding between POD and Persistance Volume
  - Various access modes like ReadWriteOnce

### Stateful Sets
* Group of pods with persistent identities and stable hostnames
* The are kept in stateful sets whether they are scheduled or not
* A disk is attached to them, where resilient data such as state information for each pod is stored
* Peristent Volumes - They serve as local disks attached to Nodes. Volumes are attached to Pods
* Each Pod has persistent ID that allows k8s to run a replicated DB
* Even if this pod is rescheduled to run on different machine, the ID persists, so that state of the pod is retrieved



### Kubernetes DaemonSet
DaemonSets are Kubernetes API objects that allow you to run Pods as a daemon on each of your Nodes. New Nodes that join the cluster will automatically start running Pods that are part of a DaemonSet. DaemonSets are often used to run long-lived background services such as Node monitoring systems and log collection agents. To ensure complete coverage, it’s important that these apps run a Pod on every Node in your cluster.

By default, Kubernetes manages your DaemonSets so that every Node is always running an instance of the Pod. You can optionally customize a DaemonSet’s configuration so that only a subset of your Nodes schedule a Pod.





### Links

Stateful
https://www.youtube.com/watch?v=tivL8sNbPik&t=28s
https://www.youtube.com/watch?v=30KAInyvY_o

https://github.com/antonputra/tutorials/blob/d1e5ba861b7e139c1c1a9ee07197cad86cb3bb72/lessons/143/monitoring/grafana/5-pvc.yaml#L3

https://spacelift.io/blog/kubernetes-daemonset
