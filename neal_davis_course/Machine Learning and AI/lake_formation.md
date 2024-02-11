### Lake Formation

Centralize Machine Learning

AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and prepared for analysis. With AWS Lake Formation, you can import data from MySQL, PostgreSQL, SQL Server, MariaDB, and Oracle databases running in Amazon Relational Database Service (RDS) or hosted in Amazon Elastic Compute Cloud (EC2). Both bulk and incremental data loading are supported.


### . Amazon Quantum Ledger Database (Crypto)

Fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log. It is not suitable for directly retrieving data from MySQL on RDS and using the data for a Machine learning use case.

### Amazon Neptune

 Amazon Neptune is a fast, reliable, fully managed "graph database" service that makes it easy to build and run applications. It is not suitable for directly retrieving data from MySQL on RDS and using the data for a Machine learning use case.

---------------------------------------------------------------------------------------

Q. A company wishes to query data that resides in multiple AWS accounts from a central data lake. Each account has its own Amazon S3 bucket that stores data unique to its business function. Users from different accounts must be granted access to the data lake based on their roles.

A. Use AWS Lake Formation to consolidate data from multiple accounts into a single account.


Amazon S3 forms the storage layer for Lake Formation. If you already use S3, you typically begin by registering existing S3 buckets that contain your data. Lake Formation creates new buckets for the data lake and import data into them. AWS always stores this data in your account, and only you have direct access to it.

https://aws.amazon.com/blogs/big-data/building-securing-and-managing-data-lakes-with-aws-lake-formation/

https://docs.aws.amazon.com/lake-formation/latest/dg/how-it-works.html
