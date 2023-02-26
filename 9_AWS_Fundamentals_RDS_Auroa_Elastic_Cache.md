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
* 
