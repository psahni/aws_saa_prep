### Replace On premise NFS
    - AWS storage gateway file gateway

### How to connect on premise servers to block storage
    - AWS storage gateway  in stored vol mode




Q. A High-Performance Computing (HPC) application requires a high-performance filesystem for running data analysis. The filesystem should transparently access source data stored as Amazon S3 objects. Which type of filesystem is ideal for this use case?
A. Amazon FSx for Lustre.



https://digitalcloud.training/aws-storage-gateway/

* AWS Storage Gateway supports three storage interfaces: file, volume, and tape.

FSx is for DFS namespaces and DFS replication
https://www.udemy.com/course/aws-certified-solutions-architect-associate-hands-on/learn/lecture/28619108#overview


### Tape Backup
* The *AWS Storage Gateway* - "Tape Gateway" enables you to replace using physical tapes on premises with virtual tapes in AWS without changing existing backup workflows. Tape Gateway emulates physical tape libraries, removes the cost and complexity of managing physical tape infrastructure, and provides more durability than physical tapes.


* EFS: The NFS protocol is used by AWS Storage Gateway "File Gateways" but these do not provide virtual tape functionality that is suitable for replacing the existing backup infrastructure.
