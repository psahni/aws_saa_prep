### Kubernetes API

Who uses API
* User (kubectl)
* Helm
* Monitoring Tools


* Scheduler
* kubelet
* controller manager

### Admission Controller

* Enforce policies and modify resources
* Enforce Quotas (Quota management)
* Validate configurations
* Useful for namespace management


### API flow
* Request comes and matched with route
* Authentication through authentication-mode param (RBAC)
* Authorization
* Response generation

### CRD (Custom Resource Definition)
* To extend the API
* For example:- You can create CRD to deploy and manage MySQL instances
Functionality outside of K8s

---------------------------------------------------------------------------

$ kubectl get nodes --v=6

`
  GET https://127.0.0.1:6443/api/v1/nodes?limit=500
`

When kubectl makes a request, k8s also does authentication using the info stored in .kube/config
but you can use proxy.

$ kubetcl proxy &
`Starting to serve at 127.0.0.1:8001`

Now you can directly access the proxy service at 8001 to get the information about the nodes

You can check the open api specification:-

`$ curl localhost:8001/openapi/v3`

