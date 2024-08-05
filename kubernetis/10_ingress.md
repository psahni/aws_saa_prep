An API object that manages external access to the services in a cluster, typically HTTP.

Ingress may provide load balancing, SSL termination and name-based virtual hosting.

Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.

Here is a simple example where an Ingress sends all its traffic to one Service:

![alt text](ingress.png)

You must have an Ingress controller to satisfy an Ingress. Only creating an Ingress resource has no effect.



https://kubernetes.io/docs/concepts/services-networking/ingress/