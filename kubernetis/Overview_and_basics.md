## K8s


### Basics
<img width="733" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/b2e3d22f-3a33-4062-945b-40be5c7d1e95">

* Dependency issues can be reduced. One just needs docker env.
* Docker utilizes Lxe containers

* Layer of Docker
* Layer of OS Kernal

<img width="974" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/eef7f95f-d0f1-42d6-b88c-226ec3deaa80">

* Each VM has own OS. So lot of resources are used
* Docker containers are very light, and quickly starts
* Docker containers can share resources
* `docker run nodejs`
* Image is like template, package
* Container is running instance of image

### Container Orchestration
* Orchestration means automatic deployment and management
* Docker Swarm is Orchestration tech.
* Increase or decrease resources based on Load

### Kubernetes Orchestration
* Node: It is a machine physical or virtual. It is a worker machine on which kub containers are created.
* Cluster: It is a set of nodes
* Master: A Node, it watches over the nodes, and respon. for orchestration
* Master has various comp.
  - API server
  - etcd - Distributed key value pair.
  - Scheduler: Dist of work
  - Controller: Brain behind orchestration
  - Container Run time: Docker
  - Kubelet: It is agent that runs on each node. It makes sure container is running as expected
* Master vs Worker Nodes
  - Worker node where container is hosted (Container run time installed)
  - Master has kube api server
  - Worker node has kubelet which is agent
  - etcd, controller, scheduler

* Kubectl
   - It is command line utility
   - kubectl run hello-min
   - kubectl cluster-info
   - kubectl get nodes



 
