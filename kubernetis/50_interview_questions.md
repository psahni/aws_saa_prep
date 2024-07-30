
### Readiness probe
Readiness probes are designed to let Kubernetes know when your app is ready to serve traffic. 
Kubernetes makes sure the readiness probe passes before allowing a service to send traffic to the pod. 
If a readiness probe starts to fail, Kubernetes stops sending traffic to the pod until it passes.

Eg: POD is getting ready after a scale up event

### Liveness probe
Liveness probes let Kubernetes know if your app is alive or dead. 
If you app is alive, then Kubernetes leaves it alone. 
If your app is dead, Kubernetes removes the Pod and starts a new one to replace it.

Eg: Due to some coding error, server crashes, so app is not alive, hence pod needs to be restarted

https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes
