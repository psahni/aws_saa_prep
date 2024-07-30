* Controllers: They are the brain behind kubernetis objects


### Replication Controller
* Specififc num of pods are running at a particular time
* When one fails, it creates the new one

#### Load Balancing

<img width="500" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/3ea37ba5-3b45-4426-89fa-be2481896a04">

#### Replication Controller and Replica Set

* Replica Set is the new way to manage. Many things common with Replication Controller
* `kind: ReplicationController`

#### ReplicationController example
<img width="650" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/24fd4bb8-9727-48e2-acb2-e78d264af4af">

#### Replica Set example
* Selector is required field in replica set. Thats the main difference with RC.
* `kubectl create -f definition-file.yml`
* `kubectl get replicaset`
* `kubectl delete replicaset myapp-replicaset` -> name of the replicaset
* There could be 100 pods in the cluster, how do replicaSet know which pod to manage. This is where lables and selectors comes handy.

<img width="650" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/d19c3f35-1364-4308-9c2e-2940fc78feb9">

#### Updating the Replica
* Open the replica defn file
* update the replica from 3 to 6 for example
* `kubectl replace -f replicaset-definition.yml` (give the name of same file)
* `kubectl scale --replicas=6 -f file.yml` -> This will update the replica, but not the file






