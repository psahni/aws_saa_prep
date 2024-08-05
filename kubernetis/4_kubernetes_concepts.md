## PODS

* Containers are encap in object called POD. POD is the smallest and most basic unit in kube cluster. It is inside the Node.
* If the num of users using the app increase, we increase the POD, if no space is available in Node, we add a new Node.
* POD has 1 or more containers, but they are of diff type not of same type.
* Containers in POD can share resources.
* Containers can have helpers containers. Each helper container have to be linked with app container.
* Kubernetes pod can do this for us easily.

### Kubectl
* Download the image and run
`kubectl run nginx --image nginx`

* Get list of pods
`kubectl get pods`

* Info about pod
`kubectl describe pod nginx`

* Status of POD (Where the pod is running)
`kubectl get pods -o wide`

### Create POD using yaml definition file

* You don't need to create Pods directly, even singleton Pods. Instead, create them using workload resources such as Deployment or Job.

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```

`kubectl apply -f https://k8s.io/examples/pods/simple-pod.yaml`

#### Pods and controllers 

* You can use workload resources to create and manage multiple Pods for you. A controller for the resource handles replication and rollout and automatic healing in case of Pod failure. For example, if a Node fails, a controller notices that Pods on that Node have stopped working and creates a replacement Pod. The scheduler places the replacement Pod onto a healthy Node.

#### POD templates

* Controllers for workload resources create Pods from a pod template and manage those Pods on your behalf.
* PodTemplates are specifications for creating Pods, and are included in workload resources such as <b> Deployments, Jobs, and DaemonSets. </b>

* Each controller for a workload resource uses the PodTemplate inside the workload object to make actual Pods.

#### Updating a POD template

* StatefulSet controller ensures that the running Pods match the current pod template for each StatefulSet object. If you edit the StatefulSet to change its pod template, the StatefulSet starts to create new Pods based on the updated template. Eventually, all of the old Pods are replaced with new Pods, and the update is complete.
* Each workload resource implements its own rules for handling changes to the Pod template.
* Kubernetes doesn't prevent you from managing Pods directly. It is possible to update some fields of a running Pod, in place.
* Most of the metadata about a Pod is immutable. For example, you cannot change the namespace, name, uid, or creationTimestamp fields; the generation field is unique. It only accepts updates that increment the field's current value.

#### Pod networking 
* Each Pod is assigned a unique IP address for each address family. Every container in a Pod shares the network namespace, including the IP address and network ports. Inside a Pod (and only then), the containers that belong to the Pod can communicate with one another using `localhost`
  
* Containers in different Pods have distinct IP addresses. Containers in different Pods have to use networking for communication.

* Containers within the Pod see the system hostname as being the same as the configured name for the Pod.

#### Static Pods
Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them. Whereas most Pods are managed by the control plane (for example, a Deployment), for static Pods, the kubelet directly supervises each static Pod (and restarts it if it fails).

<a href='https://kubernetes.io/docs/concepts/workloads/pods/'>LINK</a>


### Kubernetes – Images


When we create a StatefulSet, pod Deployment, or any other object that includes a Pod template then the pull policy of all containers in that pod will be set to IfNotPresent by default if it is not explicitly specified. This specific policy causes Kubelet to skip pulling an image if it already exists. 

The imagePullPolicy for any container and the tag associated with the image affects when the kubelet attempts to download or pull the specific image. They can even set values to the imagePullPolicy like IfNotPresent, Always, or Never. 

imagePullPolicy: Always :- This Pull Policy defines that whenever we run this file to create the container, it will pull the same name again.

https://www.geeksforgeeks.org/kubernetes-images/

### Labels and Selectors
* Suppose we want to know(query) how many pods with label "front-end" are running and what is the status

```
$ kubectl get pods --selector "app=frontend"
```

https://www.golinuxcloud.com/kubernetes-labels-selectors-annotations/


### K8s Namespaces

### K8s Contexts

A context is the connection to a specific cluster (username/apiserver host) used by kubectl. You can manage multiple clusters that way. 

You use multiple contexts to target multiple different Kubernetes clusters.You can quickly switch between clusters by using the 
```kubectl config use-context command.```

Namespaces are a way to divide cluster resources between multiple users (via resource quota).
Namespaces are intended for use in environments with many users spread across multiple teams, or projects.
Namespace is a logical partition inside a specific cluster to manage resources and constraints.
