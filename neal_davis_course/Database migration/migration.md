### Discovery Service

AWS Application Discovery Service helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers and databases. Application Discovery Service is integrated with AWS Migration Hub and AWS Database Migration Service Fleet Advisor. 

Migration Hub simplifies your migration tracking as it aggregates your migration status information into a single console.
Use DMS Fleet Advisor to assess migrations options for database workloads.

Using Application Discovery Service APIs, you can export the system performance and utilization data for your discovered servers. Input this data into your cost model to compute the cost of running those servers in AWS. Additionally, you can export data about the network connections that exist between servers. 


https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html


* Agentless discovery 
* Agent-based discovery

### DMS

AWS Database Migration Service (AWS DMS) is a cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to migrate your data into the AWS Cloud or between combinations of cloud and on-premises setups.

With AWS DMS, you can perform one-time migrations, and you can replicate ongoing changes to keep sources and targets in sync. If you want to migrate to a different database engine, you can use the AWS Schema Conversion Tool (AWS SCT) to translate your database schema to the new platform. You then use AWS DMS to migrate the data. Because AWS DMS is a part of the AWS Cloud, you get the cost efficiency, speed to market, security, and flexibility that AWS services offer.

You can use AWS DMS to migrate data to an Amazon DynamoDB table. Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. AWS DMS supports using a relational database or MongoDB as a source.


### Application Migration Service

### SMS
    Agent Less Service

### Data Sync

### Snowball Family
    (Snowball, Snowball Edge, SnowCone and Snowmobile)

    The AWS Snow Family is a service that helps customers who need to run operations in austere, non-data center environments, and in locations where there's no consistent network connectivity. You can use these devices to locally and cost-effectively access the storage and compute power of the AWS Cloud in places where an internet connection might not be an option.

    Snowball and Snowmobile are used for migrating large volumes of data to AWS
    
    Snowmobile is literally a truck with a container on the back full of storage.
    * Snowmobile can transfer up to 100PBs of data.


    Snowball Edge
        Used for places where u have limited internet connectivity
        Machine learning, processing

        Compute optimized
        Storage optimized

        * Snowball can only transfer up to 80TB/50TBs of data.

    AWS Snowcone 
        A portable, rugged, and secure device for edge computing and data transfer. You can use a Snowcone device to collect, process, and move data to the AWS Cloud, either offline by shipping the device to AWS, or online by using AWS DataSync.

    Snowball Client

