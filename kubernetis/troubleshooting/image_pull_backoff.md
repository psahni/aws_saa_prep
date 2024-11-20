* Error while pulling container image

### Reasons
- Invalid image
  - Invalid tag
- Image does not exist
- Private image (Secure)
  imagePullSecret: <Your repo credentials> // It can be ECR (AWS container repo)

* use describe command to troubleshoot
* check the pods in watch mode
  `kubectl get pods -w`

* ErrImagePull

* You have to create kube secret
```
  $ kubecrl create secret docker-registry demo --docker-server=<your-registry> 
  --docker-username=<name> --docker-password=<password> --docker=email<youre>
```

### Namespace issues

* Few services might take more memory than other, causing other services to fail.

* So, there will be `resource quota`. Assign the limit. Like a certain namespace
can not take more than 50 GB of space. CPU and RAM both

* You have to do Performance benchmarking

* Probably we have to do cluster scaling

* One namespace mght be leaking memory even after allocation

* `Resource limit` to POD


### CrashLoopBackoff

* OOMKilled (out of memory killed)
* collect thread dump and heap dump





