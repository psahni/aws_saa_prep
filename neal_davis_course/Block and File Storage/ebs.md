### File System Types
    - Object storage (S3)
    - Block storage (Hard drive)
    - File based storage (Network  file system)

### EBS
    - Every EC2 instance is attached to an EBS volume
    - Always within one AZ, means an EC2 can't connect to EBS volume in another AZ
    - Multi attach allows you to connect one EBS vol(IOPS Io1 vol) to multiple EC2 instances (Nitro based only)
    - Gp2 (1GB-16TB)
    - Io1 and Io2
    - Throughput opti HDD - st1 (Used for Big Data), 125 GB - 16 TB
    - IOPS is very low for st1 and sc1 types HDD. Save money
    - There is no IOPS SLA for HDD volumes
    - You can attach multiple EBS to your EC2
    - By default, the root EBS vol is delete when you terminate an instance
    - Non boot vols are not deleted on termination
    - Persistent Storage for mission critical workloads


    - An EBS volume is off-instance storage that can persist independently from the life of an instance. You can specify not to terminate the EBS volume when you terminate the EC2 instance during instance creation.
    - EBS volumes support live configuration changes while in production which means that you can modify the volume type, volume size, and IOPS capacity without service interruptions.



### EBS Volumes

* Gp2
General Purpose SSD (gp2) volumes offer cost-effective storage that is ideal for a broad range of workloads. These volumes deliver single-digit millisecond latencies and the ability to burst to 3,000 IOPS for extended periods of time.

Between a minimum of 100 IOPS (at 33.33 GiB and below) and a maximum of 16,000 IOPS (at 5,334 GiB and above), baseline performance scales linearly at 3 IOPS per GiB of volume size

The volume will provide a baseline performance of 750 IOPS

### Do we take snapshot of root vol also?
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html

(Optional) By default, Amazon EBS creates a snapshot of the instance's root volume. If you do not want to create a snapshot of the instance's root volume, select Exclude root volume.

### How do I unencrypt an encrypted EBS volume in Linux?
You can copy an encrypted volume to a new, unencrypted volume using a temporary Amazon Elastic Compute Cloud (Amazon EC2) Linux instance. You can then attach the unencrypted volume to your original instance.

### Automated backup
    - DLM (Data life cycle manager)

### Copy an EBS volume from the us-west-1a availability zone to an instance in the us-west-2b availability zone?

Create a snapshot of the EBS volume in us-west-1a. Create a new volume in us-west-2b from the snapshot.
This is the best method for copying an EBS volume between AZs. Remember, snapshots are stored on Amazon S3 which stores data within a region, not an AZ.

### How Hibernation works

When you hibernate an instance, Amazon EC2 signals the operating system to perform hibernation (suspend-to-disk). Hibernation saves the contents from the instance memory (RAM) to your Amazon Elastic Block Store (Amazon EBS) root volume. Amazon EC2 persists the instance's EBS root volume and any attached EBS data volumes. When you start your instance:

  • The EBS root volume is restored to its previous state
  • The RAM contents are reloaded
  • The processes that were previously running on the instance are resumed
  • Previously attached data volumes are reattached and the instance retains its instance ID

### Trivia: How to have max I/O for a video production company

The best I/O performance can be achieved by using instance store volumes for the video processing. This is safe to use for use cases where the data can be recreated from the source files so this is a good use case.

