<b>Kubernetes service</b> will help you to expose the pods that are running in the cluster to the outside world and also they will make it available for the pods to each other that are running in the Kubernetes cluster.



### Types of K8s Services

1. Cluster IP
  * Expose the service on an internal IP address which can be reachable with in the cluster.
  * If you didn’t want to expose the pod to out side and need to be used for internal purpose you can use the ClusterIP.
  * Mainly used for the internal purposes like databases API services which are used for internal purpose.


2. Node Port
  * NodePort to expose the application to the internet from where end users can access the application which is running inside the pod of kubernetes cluster.
  * Exposes Node
  * Can expose only one service
  * Not the recommended way

  When you use this kind of service object, kubernetes would create a random port in the range of 30000-32768 on each of the nodes and you can access the backend pod by typing the IP address of the Node followed by the port as follows:

  http://192.168.126.8:32768


  If you have multiple nodes, each node will have it own IP and you would need to use the IP address and the port number to access your workload. This is good for testing purposes and local development, but not ideal for real world scenarios.


3. Load Balancer (Recommended Way, More recommended is Ingress)
  * Operates at Layer 4
  * Uses Round Robin
  * Exposes multiple services at different IP address
  * For intelligent routing we use Ingress, which operates at Layer 7
  
  * Ingress is like a LoadBalancer but more intelligent.
  * You can redirect as per subdomain or value in the url (Network load balancer)


--
Because load balancers are defined per service, they can only route to a single service. This is different from an ingress, which has the ability to route to multiple services inside the cluster.


https://www.baeldung.com/ops/kubernetes-ingress-vs-load-balancer
https://www.youtube.com/watch?v=NPFbYpb0I7w
