### RDS
* Automatic Provisioning
* Autoscale (if goes beyond threshold)

### Read Replica
* To offload the load from primary DB
* There is cost when data is replicated from one AZ to anther AZ

### RDS Multi AZ
* Disaster Recovery - Create a standby database, with master database
* No manual intervention
* Read Replicas can be setup as Multi AZ for DR
* Which RDS (NOT Aurora) feature when used does not require you to change the SQL connection string?
    * Multi-AZ keeps the same connection string regardless of which database is up - Correct Ans
    * Read replicas - In correct ans


#### Important for exam - How to go from Single AZ to multi AZ
* We just need to modify db settings and enable it
* A SYNC DB will be created in another AZ

### RDS Custom
* Provides full admin access to DB and underlying OS.
* Oracle and SQL server


### Aurora DB (IMP)
* Faster and optimized than PG Sql and Mysql.
* Multiple Read Replicas with loan balancer, with one master DB.
* Automatic failover, security, Backup, Monitoring, Backtrack
* An Aurora DB cluster can contain up to 15 Aurora Replicas. 
* The Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans within an AWS Region.
* Replication - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html
* Read Replica and Write Replica
* Some read replica's can be bigger
* Read replicas can defined custom end point
* Run Analytical queries on some read replica
* Aurora Multi master - In case of FO (Failover), every node will act as a R/W node, instead RR
* Aurora Global Database, 1 primary R/W
* <b>Aurora Global Databases</b> allows you to have an Aurora Replica in another AWS Region, with up to 5 secondary regions. (Quiz)
* 5 Cross Regions, where you can have Read Replica, with upto 16 RR per region
* <b> Cross Region replication takes less one second </b>
*  If you plan to Stop RDS for long time, then take the Snapshot and restore it when you need it
*  Automated Backups - Trans logs are backed by RDS every 5 mins

### Database Clustering
* You create one Primary DB, which performs Read/Write and other replicas who only do read.
* Whenever write operation is performed, it is synced to other replicas

### RDS and Aurora Security
* To encrypt an un-encrypted DB, you have to take snapshot and then restore
* IAM authentication also possible
* Audit logs can be enabled and sent to cloud watch for longer retention

### RDS Proxy
* By RDS proxy, database efficiency is increased, by reducing the stress on DB resources (CPU, RAM) and minimise open connections (and timeouts)
* Reduce the fail over time by 66%
* Enforce IAM auth, stores the credentials in AWS Secret Manager
* It is not public. It is accessed via VPC.
* This reduces the failover time by up to 66% and keeps connection actives for your applications (Quiz)


### Amazon Elastic Cache Overview
* RDS is for managed RDBMS
* Elastic cache is for Memcache or Redis
* For read intensive workload, we can offload DB and use cache
* Cache are high performance and low latency
* Redis has Data durability and high availability
* No Backup and restore in Memcache (Non persistant)
* Sticky Session Alternative:-
  * Storing Session Data in ElastiCache is a common pattern to ensuring different EC2 instances can retrieve your user's state if needed.


### Use case Redis

<img width="500" alt="image" src="https://user-images.githubusercontent.com/84832/221413493-223a7401-2ae3-42a4-84e8-1c3b9a8e74bb.png">


### RDS Databases ports:

```
PostgreSQL: 5432

MySQL: 3306

Oracle RDS: 1521

MSSQL Server: 1433

MariaDB: 3306 (same as MySQL)

Aurora: 5432 (if PostgreSQL compatible) or 3306 (if MySQL compatible)
```

Quiz:- Your development team would like to run a version of the application in a scaled-down application with the ability to perform some heavy workload on a need-basis. Most of the time, the application will be unused.
Ans:- Aurora Serverless


