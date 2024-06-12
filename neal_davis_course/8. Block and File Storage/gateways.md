### Replace On premise NFS
    - AWS storage gateway file gateway

### How to connect on premise servers to block storage
    - AWS storage gateway  in stored vol mode




### Amazon FSx for Lustre

Q. A *High-Performance Computing (HPC)* application requires a high-performance filesystem for running data analysis. The filesystem should transparently access source data stored as Amazon S3 objects. Which type of filesystem is ideal for this use case?

A. Amazon FSx for Lustre.

* Amazon FSx for Lustre is ideal for high performance computing (HPC) workloads running on Linux instances. FSx for Lustre provides a native file system interface and works as any file system does with your Linux operating system.

When linked to an Amazon S3 bucket, FSx for Lustre transparently presents objects as files, allowing you to run your workload without managing data transfer from S3.

This solution provides all requirements as it enables *Linux* workloads to use the native file system interfaces and to use S3 for long-term and cost-effective storage of output files.

Amazon FSx works "natively" with Amazon S3, letting you transparently access your S3 objects as files on Amazon FSx to run analyses for hours to months.


https://digitalcloud.training/aws-storage-gateway/

* AWS Storage Gateway supports three storage interfaces: file, volume, and tape.

FSx is for DFS namespaces and DFS replication
https://www.udemy.com/course/aws-certified-solutions-architect-associate-hands-on/learn/lecture/28619108#overview


### Tape Backup
* The *AWS Storage Gateway* - "Tape Gateway" enables you to replace using physical tapes on premises with virtual tapes in AWS without changing existing backup workflows. Tape Gateway emulates physical tape libraries, removes the cost and complexity of managing physical tape infrastructure, and provides more durability than physical tapes.


* EFS: The NFS protocol is used by AWS Storage Gateway "File Gateways" but these do not provide virtual tape functionality that is suitable for replacing the existing backup infrastructure.
