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


### Aurora DB (Imp)
* Faster and optimized than PG Sql and Mysql.
* Multiple Read Replicas with loan balancer, with one master DB.
* Automatic failover, security, Backup, Monitoring, Backtrack
