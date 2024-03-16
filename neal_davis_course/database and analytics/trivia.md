### Trivia: Restrict Access to Dynamo DB

(Specific, private source IP addresses)

• There are two different types of VPC endpoint: interface endpoint, and gateway endpoint. 

• With an interface endpoint you use an ENI in the VPC. With a gateway endpoint you configure your route table to point to the endpoint. 

• "Amazon S3 and DynamoDB use gateway endpoints". This solution means tha all traffic will go through the VPC endpoint straight to DynamoDB using private IP addresses.

• Amazon DynamoDB and Amazon S3 support gateway endpoints, not interface endpoints. 
With a gateway endpoint you create the endpoint in the VPC, attach a policy allowing access to the service, and then specify the route table to create a route table entry in. (**V imp point)

### VPC - Gateway End Point
A Gateway endpoint is a type of VPC endpoint that provides reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC. Instances in your VPC do not require public IP addresses to communicate with resources in the service.

### Trusted S3 Buckets

• An organization needs to control the access for several S3 buckets. They plan to use a gateway endpoint to allow access to trusted buckets.
• Generate an endpoint policy for trusted S3 buckets.

 It takes a lot of time to set up a bucket policy for each and every S3 bucket. This can be simplified by whitelisting access to trusted S3 buckets in a single S3 endpoint policy.



References:-
https://docs.amazonaws.cn/en_us/vpc/latest/userguide/vpc-endpoints-ddb.html
https://aws.amazon.com/premiumsupport/knowledge-center/iam-restrict-calls-ip-addresses/
https://aws.amazon.com/blogs/aws/new-vpc-endpoints-for-dynamodb/


### Trivia: Users in Europe face slow query issue

• Amazon Aurora Global Database is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.

• A global database can be configured in the European region and then the application tier in Europe will need to be configured to use the local database for reads/queries. The diagram below depicts an Aurora Global Database deployment.


Multi Region: Aurora
Multi AZ    : Amazon RDS

• You cannot create an RDS Read Replica of a database that is running on Amazon EC2. You can only create read replicas of databases running on Amazon RDS.

• You cannot configure a multi-AZ DB (RDS) instance to run in another Region, it must be in the same Region but in a different Availability Zone.

• An Aurora global database consists of one primary AWS Region where your data is mastered, and up to five read-only, secondary AWS Regions. Aurora replicates data to the secondary AWS Regions with typical latency of under a second. You issue write operations directly to the primary DB instance in the primary AWS Region.

