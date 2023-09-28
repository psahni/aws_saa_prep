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



