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
  

### Dir structure
* charts.yaml
* charts/
* templates/
  * _helpers.tpl
  * deployment.yaml
  * hpa.yaml
  * ingress.yaml
  * service.yaml
  * serviceaccount.yaml
* values.yaml


### Links
https://helm.sh/docs/topics/charts/
https://www.freecodecamp.org/news/what-is-a-helm-chart-tutorial-for-kubernetes-beginners/
https://www.youtube.com/watch?v=12ticXUqLkE