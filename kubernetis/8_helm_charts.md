### Helm
* Helm is a Kubernetes package manager. It simplifies configuring and deploying
Kubernetes applications, allowing you to use a single set of values (such as the
application name or listen port) and a set of templates to generate Kubernetes
YAML files, instead of having to maintain the raw YAML files yourself.

* One popular package manager for Kubernetes is called Helm
* Helm charts, which completely specify the resources needed to run the application, its dependencies, and its configurable setting.
* Contains metadata about where the image can be found, just as a Kubernetes Deployment does.
* a Helm chart is really just a convenient wrapper around Kubernetes YAML manifests

### Usage
`kubectl delete all --selector app=demo`
`helm install --name demo ./k8s/demo`

* Helm has created a Deployment resource (which starts a Pod) and a
Service, just as in the previous example. The `helm install` does this by creating a
Kubernetes object called a Helm `release`.

### Helm terms
• A chart is a Helm package, containing all the resource definitions necessary to
run an application in Kubernetes.

• A repository is a place where charts can be collected and shared.

• A release is a particular instance of a chart running in a Kubernetes cluster.

* To check the releases
  `helm list`
  

* A `chart` is a collection of files that describe a related set of Kubernetes resources. A single chart might be used to deploy something simple, like a memcached pod, or something complex, like a full web app stack with HTTP servers, databases, caches, and so on.

* A chart is organized as a collection of files inside of a directory. The directory name is the name of the chart (without versioning information). Thus, a chart describing WordPress would be stored in a wordpress/ directory.

### Dir structure
* charts.yaml
  apiVersion 
  appVersion


* values.yaml
* charts/
* templates/
  * _helpers.tpl
  
  * deployment.yaml
  * service.yaml
  * ingress.yaml

  * hpa.yaml
  * serviceaccount.yaml



### Hands
* $ helm create quiz-application
* $ cd quiz-..
* $ tree
* Open charts.yaml. (It containes apiVersion, name, description, type, appVersion, type)
* Open values.yaml
* It has similar configuration as of POD
  ```
  image:
    repository: psahni/quiz-application
    pullPolicy: IfNotPresent
    tag: latest
  ```
* We leave other files as it is
* Install: `helm package .`
* `helm install quiz-application ./package-path` (generated in prev step)
* So helm is packaged, you can push it and use it elsewhere to install (distribution)
* K8s resources will be created
* The helm install command will output some commands to run, to get the application url
* This will create k8s deployment, service and pod.
* You can check it with get commands
* When done, stop the server and `helm uninstall quiz-application`



### Links
https://helm.sh/docs/topics/charts/

https://www.freecodecamp.org/news/what-is-a-helm-chart-tutorial-for-kubernetes-beginners/

https://www.youtube.com/watch?v=12ticXUqLkE


https://github.com/Azure-Samples/helm-charts/tree/master
