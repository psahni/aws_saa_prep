### DeamonSet and Sidecar Container

* Deamon set is a pod that runs on every node, for example Ingress, Datadog
* Side car is a container that runs along side your main app container with in the same pod.

### SecretMap and ConfigMap

* ConfigMap - Store non confidential data in key value pairs, does not provide encryption
Refer it using ConfigMapRef. Help in keeping configuration from application code

* SecretMap - By default Etcd, you can encrypt it using KMS

### Monitoring EKS

### Etcd
* Open source key value store
* Leader worker cluster configuration, meta
* Saves cluster data
* EKS runs a multi node Etcd cluster

### Backup Data

* K8s objects saved in etcd
* App data saved in peristent vol
* K8s native api provides snapshots

### Service Mesh
* Rate limiting
* Throttling
* Circuit Breaking (Closed, Open, Half Open)
* Proxy to proxy

### Load Balancer Vs Ingress
* Ingress exposes your services to outside world.
* You can define your traffic rules based on url. (Path based routing)
* Ingress can also reach your POD's directly

### Security Best Practices
* Image size
* Static and Dynamic Scan
* Network policy to control pod traffic. Control Traffic by IP, label or namespace
* RBAC - Groups for dev, admin,tester
* Important security measures in kubernetes: 

#### Mainly four levels of security; 

cloud, cluster, container and code hardening (4 Cs). Apart from `RBAC` and proper `service accounts`, use `admission controllers` like pod standard policy, use network policies, secrets management using external secrets manager like `vault` or `AWS secrets manager`, 
use security capabilities and other steps related to image security.

### Controllers and Operators
* There are built in controllers and there are custom controllers
* Control loop matches the desired state with the current state
(Video: Top Kubernetes Interview Questions Answers (From Container Specialist)

### Port Forwarding

Port forwarding in Kubernetes is a useful feature that allows you to access applications running in a cluster from your local machine. It's primarily used for debugging and development purposes

Port forwarding is a powerful tool in the Kubernetes ecosystem, particularly useful for developers and operators who need to interact with or debug services running in a cluster without exposing them publicly.


* Debugging applications
* Accessing internal services without exposing them externally
* Development and testing

A connection is established between your local machine and the Kubernetes API server
The API server then forwards the connection to the specified pod


`kubectl port-forward pod/myapp-pod 8080:80`

