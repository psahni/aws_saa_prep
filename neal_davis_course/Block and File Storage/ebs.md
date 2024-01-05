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
    - You can attach multiple EBS to your EC2
    - By default, the root EBS vol is delete when you terminate an instance
    - Non boot vols are not deleted on termination