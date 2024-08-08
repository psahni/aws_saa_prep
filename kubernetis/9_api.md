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

