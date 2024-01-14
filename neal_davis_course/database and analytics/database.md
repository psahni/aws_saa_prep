RDS
Aurora
    Fast
    RDBMS
    5 times faster
    can have 15 replics across multiple Az's but within the region
    Fault tolerance upto 3 regions

    Amazon Aurora Multi-Master adds the ability to scale out write performance across multiple Availability Zones and provides configurable read after write consistency.

    A new application requires a database that can allow writes to DB instances in multiple availability zones with read after write consistency. Which solution meets these requirements?

    Amazon Aurora Multi-Master adds the ability to scale out write performance across multiple Availability Zones and provides configurable read after write consistency.

    Global DB:- Cross Region Availability
    Amazon Aurora global databases span multiple AWS Regions, enabling low latency global reads and providing fast recovery from the rare outage that might affect an entire AWS Region. An Aurora global database has a primary DB cluster in one Region, and up to five secondary DB clusters in different Regions.

    An Aurora global database consists of one primary AWS Region where your data is written, and up to five read-only secondary AWS Regions. You issue write operations directly to the primary DB cluster in the primary AWS Region. Aurora replicates data to the secondary AWS Regions using dedicated infrastructure, with latency typically under a second.

    Multimaster - Require no downtime
    enables uptime-sensitive applications to achieve continuous write availability through instance failure. In the event of instance or Availability Zone failures, Aurora Multi-Master enables the Aurora database to maintain read and write availability with zero application downtime. 





Mysql read replics can be cross region

Global Db
    Cross region cluster

Aurora Serverless
Aws RDS Proxy

If you need full control, then RDS should not be used

Amazon Elastic Cache
    In memory db

Elastic Memcache
    No replics
    Sharding - n1, n2 across various Az's
Redis (Cluster ON)
    Multiple shards with Primary and relicas in each
Redis (Cluster OFF)
    Single Shard and multiple replicas across various Az's



Amazon Dynamo DB

    Amazon DynamoDB is a non-relational database that is managed for you. It can *scale without downtime* and with minimal operational overhead. DynamoDB can support the request rates and response times required by this solution and is often used in eCommerce solutions and for session state use cases.
    

    - NoSql DB
    - Fully Managed
    - *DynamoDB Streams* maintains a list of item level changes and can integrate with Lambda to create triggers.

Good To Read
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html


DynamoDB Accelerator
    Micro sec latency
    1 ms = 1000 micro seconds

DynamoDB Streams

DynamoDB Global Tables

    Read and write in various Regions
    Async replication

Amazon Redshift
    Data warehouse
    OLAP
    BI
    3 copies
    Cont. backups
    Relational DB

Elastic Map Reduce
    Big Data
    managed service for hadoop
    BI

Amazon Kinesis
    Data streams

    Which Amazon Kinesis service uses AWS Lambda to transform data?
       Kinesis Firehose can deliver data to Lambda for transformation.

    Scaling by shards
    
Amazon Athena
    You can query S3 using SQL
    Can be connected to other data sources using Lambda

    Partition your data
    Bucket your data
    Use compression
    Optimize file size
    Optimize columnar data store generation
    https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-tips-for-amazon-athena/

### AWS Glue
    ETL Service
    AWS Glue is a serverless data integration service that makes it easier to discover, prepare, move, and integrate data from multiple sources for analytics, machine learning (ML), and application development.

    AWS Glue uses other AWS services to orchestrate your ETL (extract, transform, and load) jobs to build data warehouses and data lakes and generate output streams. AWS Glue calls API operations to transform your data, create runtime logs, store your job logic, and create notifications to help you monitor your job runs. The AWS Glue console connects these services into a managed application, so you can focus on creating and monitoring your ETL work. The console performs administrative and job development operations on your behalf. You supply credentials and other properties to AWS Glue to access your data sources and write to your data targets.


You can use Crawler to populate the AWS Glue

https://docs.aws.amazon.com/glue/latest/dg/how-it-works.html


### RDS Proxy

Amazon RDS Proxy is a fully managed, highly available database proxy for Amazon Relational Database Service (RDS) that makes applications more scalable, more resilient to database failures, and more secure. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.



### DMS

References:

https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-on-premises-microsoft-sql-server-database-to-amazon-rds-for-sql-server.html

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html

https://aws.amazon.com/dms/schema-conversion-tool/