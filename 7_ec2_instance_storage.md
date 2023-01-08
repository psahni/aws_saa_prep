
## Elastic Block store (EBS)
* It is a network drive you can attach to your instance(EC2) while they run
* It allows your instance to persist data, even after their termination
* it can be mounted to one instance at a time
* They are bound to a specific availability zone
* We can use the analogy network USB stick for EBS
* By default the root EBS volume is deleted on the termination of the EC2 instance
* And other volume that are attached are not deleted

## EBS Snapshot
* It makes a backup of your EBS volume at a point in time
* We can copy this snapshots across zones
* It can be archived as well. But archive and restore takes time (24 to 72 hrs)
* A snapshot can be created and copied to another AZ
* We can create a volume from snapshot


- By default when we terminate the instance, the root volume is deleted (there is setting when we launch an instance)
- The extra volume that we attach is not deleted by default.
