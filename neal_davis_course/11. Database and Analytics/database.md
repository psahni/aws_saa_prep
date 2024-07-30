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

### Aurora Serverless
Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. The database automatically starts up, shuts down, and scales capacity up or down based on application needs. This is an ideal database solution for infrequently-used applications.



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



### Amazon Dynamo DB

    Amazon DynamoDB is a non-relational database that is managed for you. It can *scale without downtime* and with minimal operational overhead. DynamoDB can support the request rates and response times required by this solution and is often used in eCommerce solutions and for session state use cases.

    - NoSql DB
    - Fully Managed
    - *DynamoDB Streams* maintains a list of item level changes and can integrate with Lambda to create triggers.
    - Performance:- The more distinct partition key values your workload accesses, the more those requests will be spread across the partitioned space. Conversely, the less distinct partition key values, the less evenly spread it would be across the partitioned space, which effectively slows the performance. This will distribute the workload evenly and provisioned throughput efficiently.

### Session Management Dynamo DB

    Amazon DynamoDB is a NoSQL database and is ideal for storing session data. The data will be both highly available and durable and can be stored persistently. DynamoDB also offers time to live (TTL) attributes that can be used to automatically expire items from the table after specified time periods.



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
    Complex Queries
    Repeat queries - Cache result (Team of scientists..)

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

    Apache Parquet is an open-source columnar storage format that is 2x faster to unload and takes up 6x less storage in Amazon S3 as compared to other text formats. One can COPY Apache Parquet and Apache ORC file formats from Amazon S3 to your Amazon Redshift cluster. Using AWS Glue, one can configure and run a job to transform CSV data to Parquet. Parquet is a columnar format that is well suited for AWS analytics services like Amazon Athena and Amazon Redshift Spectrum.


### AWS Glue
    ETL Service
    AWS Glue is a serverless data integration service that makes it easier to discover, prepare, move, and integrate data from multiple sources for analytics, machine learning (ML), and application development.

    AWS Glue uses other AWS services to orchestrate your ETL (extract, transform, and load) jobs to build data warehouses and data lakes and generate output streams. AWS Glue calls API operations to transform your data, create runtime logs, store your job logic, and create notifications to help you monitor your job runs. The AWS Glue console connects these services into a managed application, so you can focus on creating and monitoring your ETL work. The console performs administrative and job development operations on your behalf. You supply credentials and other properties to AWS Glue to access your data sources and write to your data targets.


You can use Crawler to populate the AWS Glue

https://docs.aws.amazon.com/glue/latest/dg/how-it-works.html


### RDS Proxy

Amazon RDS Proxy is a fully managed, highly available database proxy for Amazon Relational Database Service (RDS) that makes applications more scalable, more resilient to database failures, and more secure. 
Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.

### Too many connections Issue

If a "Too Many Connections" error happens to a client connecting to a MySQL database, it means all available connections are in use by other clients. Opening a connection consumes resources on the database server. Since Lambda functions can scale to tens of thousands of concurrent connections, your database needs more resources to open and maintain connections instead of executing queries. The maximum number of connections a database can support is largely determined by the amount of memory allocated to it. 

--> Upgrading to a database instance with higher memory is a straightforward way of solving the problem. Another approach would be to maintain a connection pool that clients can reuse. This is where RDS Proxy comes in.

RDS Proxy helps you manage a large number of connections from Lambda to an RDS database by establishing a warm connection pool to the database. Your Lambda functions interact with RDS Proxy instead of your database instance. It handles the connection pooling necessary for scaling many simultaneous connections created by concurrent Lambda functions. This allows your Lambda applications to reuse existing connections, rather than creating new connections for every function invocation.


### SSL Need

* rds.force_ssl
You can use Secure Sockets Layer (SSL) to encrypt connections between your client applications and your Amazon RDS DB instances running Microsoft SQL Server. SSL support is available in all AWS regions for all supported SQL Server editions.

If you want to force SSL, use the rds.force_ssl parameter. By default, the rds.force_ssl parameter is set to false. Set the rds.force_ssl parameter to true to force connections to use SSL. The rds.force_ssl parameter is static, so after you change the value, you must reboot your DB instance for the change to take effect.

* SSL Certificate

Download the Amazon RDS Root CA certificate. Import the certificate to your servers and configure your application to use SSL to encrypt the connection to RDS.

### SSL SQL Server

AWS provides SSL support for RDS for SQL Server. This allows you to protect and secure your data both in transit and at rest. To enable SSL support you should download a public certificate key from RDS at https://rds.amazonaws.com/doc/rds-ssl-ca-cert.pem You will then use the Microsoft Management Console (MMC) to import the certificate into Windows. 

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html


### DMS

References:

https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-on-premises-microsoft-sql-server-database-to-amazon-rds-for-sql-server.html

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html

https://aws.amazon.com/dms/schema-conversion-tool/