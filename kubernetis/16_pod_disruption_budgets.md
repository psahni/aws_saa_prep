### Cordon

Kubernetes Nodes need occasional maintenance. You could be updating the Node's kernel, resizing its compute resource in your cloud account, or replacing physical hardware components in a self-hosted installation.

Kubernetes `cordons` and `drains` are two mechanisms you can use to safely prepare for Node downtime. They allow workloads running on a target Node to be rescheduled onto other ones. You can then shutdown the Node or remove it from your cluster without impacting service availability.

```
$ kubectl cordon node-1
  // node/node-1 cordoned
```


* Existing Pods already running on the Node won't be affected by the cordon. They'll remain accessible and will still be hosted by the cordoned Node.

* You can check which of your Nodes are currently cordoned with the get nodes command:


### Draining

The next step is to drain remaining Pods out of the Node. This procedure will evict the Pods so they're rescheduled onto other Nodes in your cluster. Pods are allowed to gracefully terminate before they're forcefully removed from the target Node.


```
$ kubectl drain node-1
node/node-1 already cordoned
evicting pod kube-system/storage-provisioner
evicting pod default/nginx-7c658794b9-zszdd
evicting pod kube-system/coredns-64897985d-dp6lx
pod/storage-provisioner evicted
pod/nginx-7c658794b9-zszdd evicted
pod/coredns-64897985d-dp6lx evicted
node/node-1 evicted
```


The drain procedure first cordons the Node if you've not already placed one manually. It will then evict running Kubernetes workloads by safely rescheduling them to other Nodes in your cluster.

You can shutdown or destroy the Node once the drain's completed. You've freed the Node from its responsibilities to your cluster. The cordon provides an assurance that no new workloads have been scheduled since the drain completed.

https://www.howtogeek.com/devops/cordons-and-drains-how-to-prepare-a-kubernetes-node-for-maintenance/

### POD disruption Budgets

* It ensures HA of applications, during voluntary disruptions
* Maintainance, upgrade
* Application should run even during maintainance
* PDB != replicas

#### Practical
* Create 5 replicas
* Cordon the node-1
* Delete the pods on node-1
* Pods are rescheduled to node-2
* Delete the pods again from node-2
* Pods are rescheduled to node-3
* Now drain the node 3 also
* Now Pods can't be rescheduled, will be found in `pending` state. 
Hence there will be notifications
* Now uncorden all the nodes, to start scheduling pods again


### Solution

* So the maintainance of node, led to pods going away from running state, and application down time
* To solve, we need to set minimum num of pods, that must be always running, say 2

```
  $ kubectl create pdb <app_name> --selector=<app_name> -min-available=2
```

Now, practical again
* cordon/drain all nodes again
```
  k drain node-1 node-2 node-3 --delete-emptydir-data=true --ignore-daemonsets=true
```
* It will evit all pods except 2, and show error
* Then you have to uncordon one or two nodes again
* Then 2 pods will be rescheduled to those nodes
* And then error will be gone, this can take some time

After maintainance finished, you can uncorden the nodes and delete the pdb

```
  $ kubectl delete pdb/<app_name> --now
```