### Securing Kubernetes Nodes

To stop the unauthorized access, vulnerabilities and potential attacks you need to secure your kubernetes cluster and containerized applications you can secure the kubernetes cluster with the help of following service that are offered by the kubernetes.

* Node Hardening and Vulnerability Management.
* Network Security and Access Control.
* Container Runtime and Security Considerations.



### Cluster Security

### Network Policy
	Which pod are allowed to access which other pods
	
### Entities
	User
	Groups
	3rd Party Apps/Bots/Service Accounts
	end Users (applications)

### Authentication mechanism
	- Passwords
	- Tokens
	- Certificates
	- Identity providers like LDAP
	
* K8s can't create users, but can create service accounts

### Asymetric key
If public key encrypts the data, then only private key can decrypt it and vice versa
so client (browser) downloads the certificate from the server, and encrypts the data, which only server will be able to decrypt becz only server has the private key

### .kube/config

Cluster, User, Context

```yaml
Clusters
	production
		namespace: finance
	development
	google

Context	admin@kubernetes
Context	development@kubernetes
Context 

Users
	admin - admin.crt
```

	
### How to change cluster
```
$ kubectl config use-context prod-user@production
```
Each cluster can have many namespaces

```yaml
contexts:
- name: admin@production
  context:
	cluster: production
	user: admin
	namespace: finance
- name: bob@production
  context:
   cluster: production
   user: bob
   namespace: prod-test
```


### API Groups

* /version
* /api
* /metrics
* /healthz
* /apis

* K8s API server

```
  $ curl http://localhost:6443 -k
```

```
  $ kubectl proxy => starting to serve at 8001
```

user => kubectl proxy => Kube api server

* kubectl proxy  is not same as kube proxy, it is just a proxy to access Kube API server

### Authorization

#### RBAC
We have several users who are assigned a particular role. That role has many permissions

Authorization Modes
* AlwaysAllow
* AlwaysDeny

Specify this on kube api server

req -> Node auth -> RBAC Webhook

* As soon as the module denies the request it goes to next in the chain
* As soon as a module allows the requests, it is served


* Control access to resources in kubernetes clustere
* Apply Policies and rules
* kube/config configuration
* `kubectl config view`
* Certification authority
* kube config will reference the public key of the CA
* Use of key to ensure only the right user or server have access to kube api
* K8s does not manage user or group, instead it creates certificates which are authorized by CA

### Enable RBAC
 
 RBAC is enabled in your cluster through the `--authorization-mode=RBAC` option in your Kubernetes API server. You can check this by executing the command `kubectl api-versions`; if RBAC is enabled you should see the API version `.rbac.authorization.k8s.io/v1`


### How to create Role

`developer-role.yaml`

```
  $ kubectl create -f developer-role.yaml
```

```yaml
apiVersion
kind: Role
metadata:
	name:
rules:
- apiGroups:
  resources: ["pods"]
  verbs: ["list", "get"]
```  

  
You also need to create rolebindings
`Kind: RoleBinding`

```
$ kubectl auth can-i delete nodes
$ kubectl auth can-i create deployments
```

```
  $ cat /etc/kubernetes/manifests/kube-apiserver.yaml
```

```
  $ kubectl get roles
  $ kubectl describe <role_name>
```

#### Role binding full example

```
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: example-rolebinding
  namespace: mynamespace
subjects:
- kind: User
  name: example-user
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: example-role
  apiGroup: rbac.authorization.k8s.io
```

### Cluster Roles
For node permissions

* Can View Node
* Can View Node

```
  $ kubectl cluster-info
```



### References
https://medium.com/containerum/configuring-permissions-in-kubernetes-with-rbac-a456a9717d5d