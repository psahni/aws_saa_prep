### Trivia: Users in Europe face slow query issue

• Amazon Aurora Global Database is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.

• A global database can be configured in the European region and then the application tier in Europe will need to be configured to use the local database for reads/queries. The diagram below depicts an Aurora Global Database deployment.


Multi Region: Aurora
Multi AZ    : Amazon RDS

• You cannot create an RDS Read Replica of a database that is running on Amazon EC2. You can only create read replicas of databases running on Amazon RDS.

• You cannot configure a multi-AZ DB (RDS) instance to run in another Region, it must be in the same Region but in a different Availability Zone.

• An Aurora global database consists of one primary AWS Region where your data is mastered, and up to five read-only, secondary AWS Regions. Aurora replicates data to the secondary AWS Regions with typical latency of under a second. You issue write operations directly to the primary DB instance in the primary AWS Region.

### Auto Scaling in Aurora



--

Amazon Aurora has the ability to replicate a database in a fast and efficient manner without impacting performance, thanks to its underlying storage system. 