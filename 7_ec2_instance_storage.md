
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


## Misc
- By default when we terminate the instance, the root volume is deleted (there is setting when we launch an instance)
- The extra volume that we attach is not deleted by default.

- By default, when you create a snapshot, it is stored in the Amazon EBS Snapshot Standard tier (standard tier). Snapshots stored in the standard tier are incremental. This means that only the blocks on the volume that have changed after your most recent snapshot are saved.
- When you archive a snapshot, the incremental snapshot is converted to a full snapshot, and it is moved from the standard tier to the Amazon EBS Snapshots Archive tier (archive tier). Full snapshots include all of the blocks that were written to the volume at the time when the snapshot was created.



## AMI Overview
* It contains all information required to launch an instance
* We can create AMI from EC2 instance
* We modify an EC2 instance, and create AMI from it
* Pre-configured templates that can be use to launch one or more instances
* An AMI includes the following:

    * A template for the root volume for the instance (for example, an operating system, an application server, and applications)
    * Launch permissions that control which AWS accounts can use the AMI to launch instances
    * A block device mapping that specifies the volumes to attach to the instance when it's launched

## EC2 instance store
* It's a high performance hardware disk
* Better I/O performance then EBS volumes
* Good for buffering and caching data


## EBS Volume Types
* 6 types of EBS Volumes
  * gp2/gp3, io1/io2, st1, sc1
* EBS hard disks can not be a boot volume (125TB - 16 TB)
* Throughput optimzed HDD:- Big Data, Data warehouses, Log processing 
* Cold HDD - archived data 
   * For data that is infrequently accessed,  Where low cost is imp. 
 * For exam purpose, we only need to know the differences (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)

* Multiattach 
- Multple EC2 instances can be attached to one EBS in same AZ
- EBS multi attach:- Upto 16EC2 instances at a time

## EBS Encryption
* First we create EBS volume, then we create snapshot. This snapshot will be un encruypted.
* We copy the snapshot, and then we get the option to encrypt the snapshot.
* Then from that encrypted snapshot, we create an encrypted volume.
* We can also directly create encrypted volume from first snapshot 

