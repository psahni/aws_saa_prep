### Imperative Approach (Minikube)

```
> kubectl create deployment k8s-test-node-app --image=psahni/test-node-app
> kubectl expose deployment k8s-test-node-app --port=3000
```

```
> kubectl scale deployment k8s-test-node-app --replicas=3
```

```
> kubectl get pods -o wide
```

```
> kubectl get services
> minikube ssh (go to cluster terminal)
> curl 10.100.21.133:3000;echo
```

```
>  kubectl delete services k8s-test-node-app
```

### Run the service in browser

```
>  kubectl expose  deployment k8s-test-node-app --type=NodePort --port=3000
>  minikube service k8s-test-node-app (To know the URL)
```

#### Get name of container 
```
>  kubectl get pods k8s-test-node-app-7d68f496f9-kbkkm -o jsonpath='{.spec.containers[*].name}'
```
#### Update Image of deployment
```
>  kubectl set image deployment k8s-test-node-app test-node-app=psahni/test-node-app:v2
```
`Here test-node-app is the name of the container`

* After you update image, check the rollout status:-

```
> kubectl rollout status deployment k8s-test-node-app
```

#### Open K8s Dashboard

```
>  minikube dashboard
```

```
>  kubectl proxy --port=8080
```

#### Delete all resources

```
>  kubectl delete all --all (Delete all resources)
```

### Declarative Approach

* Repo `https://github.com/psahni/k8s_hands_on`

```
>  kubectl apply -f .\deployment.yaml
>  kubectl apply -f .\service.yaml
>  kubectl delete -f .\deployment.yaml -f .\service.yaml
```

### Get Service Info (Internally Exposed)
```
> kubectl exec <pod_name> -- nslookup nginx

> kubectl exec <pod_name> -- wget -q0- http://ngnix  (nginx is the name of the service exposed via ClusterIP)
```

