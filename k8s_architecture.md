<img width="516" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/0438ff20-d9ff-45bc-b3c8-256f7cd10f6e">



*The control plane is actually made up of several components:*

### kube-apiserver
This is the frontend server for the control plane, handling API requests.

### etcd
This is the database where Kubernetes stores all its information: what nodes exist, what resources exist on the cluster, and so on.

### kube-scheduler
This decides where to run newly created Pods.

### kube-controller-manager
This is responsible for running resource controllers, such as Deployments.

### cloud-controller-manager
This interacts with the cloud provider (in cloud-based clusters), managing resources such as load balancers and disk volumes.

Together, kube-apiserver, kube-controller-manager, kube-scheduler, and etcd form what is known as the control plane. The control plane is responsible for making decisions about the cluster, and pushing it toward the desired state. kube-apiserver, kube-controller-manager, and kube-scheduler are processes and etcd is a database; all four are run by the Kubernetes Master.

### Important Points
 
* Kubernetes clusters are made up of master nodes, which run the control plane, and worker nodes, which run your workloads.

* Production clusters must be highly available, meaning that the failure of a master node won’t lose data or affect the operation of the cluster.

* It’s a long way from a simple demo cluster to one that’s ready for critical production workloads. High availability, security, and node management are just some of the issues involved.

* Managing your own clusters requires a significant investment of time, effort, and expertise. Even then, you can still get it wrong.

* Managed services like Google Kubernetes Engine do all the heavy lifting for you, at much lower cost than self-hosting.

* Turnkey services are a good compromise between self-hosted and fully managed Kubernetes. Turnkey providers like Stackpoint manage the master nodes for you, while you run worker nodes on your own machines.

* If you have to host your own cluster, kops is a mature and widely used tool that can provision and manage production-grade clusters on AWS and Google Cloud.

* You should use managed Kubernetes if you can. This is the best option for most businesses in terms of cost, overhead, and quality.

* If managed services aren’t an option, consider using turnkey services as a good compromise.
Don’t self-host your cluster without sound business reasons. If you do self-host, don’t underestimate the engineering time involved for the initial setup and ongoing maintenance overhead.
