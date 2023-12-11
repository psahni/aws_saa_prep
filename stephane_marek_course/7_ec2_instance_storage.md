
## Elastic Block store (EBS)
* It is a network drive you can attach to your instance(EC2) while they run
* It allows your instance to persist data, even after their termination
* You can attach multiple EBS volumes to a single instance. The volume and instance must be in the same Availability Zone. Depending on the volume and instance types, you can use Multi-Attach to mount a volume to multiple instances at the same time.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html
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

## AWS EFS
* Amazon Elastic File System (Amazon EFS) provides serverless, fully elastic file storage so that you can share file data without provisioning or managing storage capacity and performance. Amazon EFS is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files. Because Amazon EFS has a simple web services interface, you can create and configure file systems quickly and easily. The service manages all the file storage infrastructure for you, meaning that you can avoid the complexity of deploying, patching, and maintaining complex file system configurations.

* In the demo, it was shown that, 1 EFS was connected to two EC2 instances.
* Both EC2 instances are in different AZ's


### Quiz:-
* AMIs are built for a specific AWS Region, they're unique for each AWS Region. You can't launch an EC2 instance using an AMI in another AWS Region, but you can copy the AMI to the target AWS Region and then use it to create your EC2 instances.
* When creating EC2 instances, you can only use the following EBS volume types as boot volumes: gp2, gp3, io1, io2, and Magnetic (Standard).
* Using EBS Multi-Attach, you can attach the same EBS volume to multiple EC2 instances in the same AZ. Each EC2 instance has full read/write permissions.

* Q. You have a fleet of EC2 instances distributes across AZs that process a large data set. What do you recommend to make the same data to be accessible as an NFS drive to all of your EC2 instances?
   * A. EFS is a network file system (NFS) that allows you to mount the same file system on EC2 instances that are in different AZs.

* EC2 Instance Store provides the best disk I/O performance.


* Q. You are running a high-performance database that requires an IOPS of 310,000 for its underlying storage. What do you recommend?

   * 16,000 is the maximum IOPS you can achieve when you're using the EBS gp2 volume type.
   * 64,000 is the maximum IOPS you can achieve when you're using EBS io1 or io2 volume types.
   * 256,000 is the maximum IOPS you can achieve when you're using the EBS io2 Block Express volume type.
   * A. You can run a database on an EC2 instance that uses an Instance Store, but you'll have a problem that the data will be lost if the EC2 instance is stopped (it can be restarted without problems). One solution is that you can set up a replication mechanism on another EC2 instance with an Instance Store to have a standby copy. Another solution is to set up backup mechanisms for your data. It's all up to you how you want to set up your architecture to validate your requirements. In this use case, it's around IOPS, so we have to choose an EC2 Instance Store.






