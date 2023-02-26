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

### Amazon Elastic Cache Overview
* RDS is for managed RDBMS
* Elastic cache is for Memcache or Redis
* For read intensive workload, we can offload DB and use cache
* Cache are high performance and low latency
* Redis has Data durability and high availability
* No Backup and restore in Memcache (Non persistant)
