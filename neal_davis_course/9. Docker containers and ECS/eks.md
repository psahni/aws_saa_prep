Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification.

Autoscaling is a function that automatically scales your resources up or down to meet changing demands. This is a major Kubernetes function that would otherwise require extensive human resources to perform manually.

Amazon EKS supports two autoscaling solutions:

* *Karpenter* is a flexible, high-performance Kubernetes cluster autoscaler that launches appropriately sized compute resources, like Amazon EC2 instances, in response to changing application load. It integrates with AWS to provision compute resources that precisely match workload requirements.

* *Cluster Autoscaler*, on the other hand, automatically adjusts the number of nodes in a cluster based on pod failures or rescheduling. It utilizes Auto Scaling groups for managing the cluster's node capacity.


* *The Kubernetes Horizontal Pod Autoscaler (HPA)* automatically scales the number of Pods based on CPU utilization, allowing applications to scale in or out to meet demand. It is a standard API resource in Kubernetes that requires a metrics source like the "Kubernetes metrics server" to be installed on the Amazon EKS cluster. The HPA does not need additional deployment or installation on the cluster to start scaling applications.


----

* Managed Node Groups
  - Creates and manages nodes(Ec2) for you
  - Nodes are part of an ASG managed by EKS
  - Support on demand spot instances

* Self managed nodes
  - Nodes are created by you and registered to the EKS cluster and managed by an ASG

* Data Volumnes
  - need to specify storage class menifest on your EKS cluster
  - Leverages a container storage interface (CSI) complaint driver

* Support
  - EBS
  - EFS
  - Fsx
https://aws.amazon.com/blogs/containers/amazon-eks-cluster-multi-zone-auto-scaling-groups/

