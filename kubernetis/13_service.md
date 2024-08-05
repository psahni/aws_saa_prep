<b>Kubernetes service</b> will help you to expose the pods that are running in the cluster to the outside world and also they will make it available for the pods to each other that are running in the Kubernetes cluster.



### Types of K8s Services

1. Cluster IP
  * Expose the service on an internal IP address which can be reachable with in the cluster.
  * If you didn’t want to expose the pod to out side and need to be used for internal purpose you can use the ClusterIP.
  * Mainly used for the internal purposes like databases API services which are used for internal purpose.


2. Node Port
  * NodePort to expose the application to the internet from where end users can access the application which is running inside the pod of kubernetes cluster.
  * If you want to expose the pods to external and also want to use it for inside the cluster then you can use NodePort.
  * If you need to expose the application like web-applications then you can use the NodePort Serivce


3. Load Balancer
  * Operates at Layer 4
  * Uses Round Robin
  * For intelligent routing we use Ingress, which operates at Layer 7
  * Ingress is like a LoadBalancer but more intelligent.


--
Because load balancers are defined per service, they can only route to a single service. This is different from an ingress, which has the ability to route to multiple services inside the cluster.


https://www.baeldung.com/ops/kubernetes-ingress-vs-load-balancer
https://www.youtube.com/watch?v=NPFbYpb0I7w
