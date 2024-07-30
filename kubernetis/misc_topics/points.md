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
