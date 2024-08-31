
* Kubelet agent probes

### Readiness probe
Readiness probes are designed to let Kubernetes know when your app is ready to serve traffic. 
Kubernetes makes sure the readiness probe passes before allowing a service to send traffic to the pod. 
If a readiness probe starts to fail, Kubernetes stops sending traffic to the pod until it passes.

Eg: POD is getting ready after a scale up event

### Liveness probe
When to restart the container? Some time it can happen that application catch a deadlock state, in this case if pod can be
restarted, then it can solve the issue

Liveness probes let Kubernetes know if your app is alive or dead. 

If you app is alive, then Kubernetes leaves it alone. 

If your app is dead, Kubernetes removes the Pod and starts a new one to replace it.

Eg: Due to some coding error, server crashes, so app is not alive, hence pod needs to be restarted

https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes

### Startup probe
* When a container application has started
* Disables Liveness and readiness probe until it succeds

* Startup Probes are used to ascertain if an application within a container has successfully started up. 
If the startup probe fails, Kubernetes takes action based on the restart policy defined in your configuration file.

* Startup probes ensure applications have sufficient time to start, particularly crucial for larger applications that require ample time for loading data or building connections.

* Helpful for larger apps that require significant time to get started, like loading data or building connections

https://medium.com/@patilpradeep1990/understanding-kubernetes-probes-liveness-readiness-and-startup-8df8e8185e03

### Cluster IP | NodePort | Load Balancer

https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0


### How to set up probe
* Command
* Http request

```
livenessProbe:
  exec:
    command:
      - /bin/sh
      - -c
      - nc -z localhost 8095
  initialDelaySeconds: 60
  periodSeconds: 10
```

```
readinessProbe:
  httpGet:
    path: /user-app/health-check
    port: 8095
  initialDelaySeconds: 60
  periodSeconds: 10
```

### Resources: Request and Memory

```
resources:
  requests:
    memory: "128Mi" // 128 MebiByte
    cpu: "500m"     // mili CPU
  limits:
    memory: "500Mi"
    cpu: "1000m // 1 VCPU
```

### What is restart policy

`restartPolicy: Always`
* The Always restart policy is the default policy in Kubernetes. So if we create a Pod without setting the restartPolicy field, then Kubernetes will automatically set it to Always.

* By using this policy, containers will restart when they terminate, regardless of their exit status. In other words, this policy doesn’t care why the container exited, whether it is a successful completion or an error. It will always make sure that the container is running.

* This policy is useful for containers with applications that need to be always running like web servers. So the policy can ensure these containers are always available.

`restartPolicy: OnFailure`
* The OnFailure restart policy will restart a container only if the container process exits with an error. This means that the exit code of the container will determine the decision that the policy will take. We can use this policy for containers that we need to run successfully until completion and then stop.

* Use this if you want to finish a job, if the job is successful, pod will be terminated and it will not restart


### What happens when node goes down?
Node controller will do it's job



### References
https://www.baeldung.com/ops/kubernetes-always-vs-onfailure-restart-policy