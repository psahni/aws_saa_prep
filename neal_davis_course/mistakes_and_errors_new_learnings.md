Amazon S3 File Gateway provides a seamless way to connect to the cloud to store application data files and backup images as durable objects in Amazon S3 cloud storage. Amazon S3 File Gateway offers SMB or NFS-based access to data in Amazon S3 with local caching.

It can be used for on-premises data-intensive Amazon EC2-based applications that need file protocol access to S3 object storage. Lifecycle policies can then transition the data to S3 Glacier Deep Archive after 30 days.

-----------

Amazon SageMaker allows you to build, train, and deploy machine learning models for any use case with fully managed infrastructure, tools, and workflows. AWS Data Exchange allows you to gain access to third party data sets across Automotive, Financial Services, Gaming, Healthcare & Life Sciences, Manufacturing, Marketing, Media & Entertainment, Retail, and many more industries.

------

Q A Solutions Architect for a large banking company is configuring access control within the organization for an Amazon S3 bucket containing thousands of financial records. There are 20 different teams which need to have access to this bucket, however they all need different permissions. These 20 teams correspond to 20 accounts within the banking company who are currently using AWS Organizations.
What is the simplest way to achieve this, whilst adhering to the principle of least privilege?

Amazon S3 Access Points, a feature of S3, simplify data access for any AWS service or customer application that stores data in S3. With S3 Access Points, customers can create unique access control policies for each access point to easily control access to shared datasets. You can also control access point usage using AWS Organizations support for AWS SCPs.

Q A Solutions Architect is tasked with designing a fully Serverless, Microservices based web application which requires the use of a GraphQL API to provide a single entry point to the application.

AWS AppSync is a serverless GraphQL and Pub/Sub API service that simplifies building modern web and mobile applications.

AWS AppSync GraphQL APIs simplify application development by providing a single endpoint to securely query or update data from multiple databases, microservices, and APIs.

---------------

Amazon Comprehend to detect customer sentiment and analyze customer interactions and automatically extract insights from customer surveys to improve your products. 
An S3 Data Lake also acts as an ideal data repository for Machine Learning data used by many different business units and applications.

---------------

To increase performance and redundancy for an application a company has decided to run multiple implementations in different AWS Regions behind network load balancers. The company currently advertise the application using two public IP addresses from separate /24 address ranges and would prefer not to change these. Users should be directed to the closest available application endpoint.

1. Migrate both public IP addresses to the AWS Global Accelerator
2. Create an AWS Global Accelerator and attach endpoints in each AWS Region

This solution ensures the company can continue using the same IP addresses and they are able to direct traffic to the application endpoint in the AWS Region closest to the end user. Traffic is sent over the AWS global network for consistent performance.


The Chief Financial Officer of a large corporation is looking for an AWS native tool which will help reduce their cloud spend. After receiving a budget alarm, the company has decided that they need to reduce their spend across their different areas of compute and need insights into their spend to decide where they can reduce cost.

What is the easiest way to achieve this goal?
AWS Compute Optimizer


AWS Compute Optimizer helps you identify the optimal AWS resource configurations, such as Amazon Elastic Compute Cloud (EC2) instance types, Amazon Elastic Block Store (EBS) volume configurations, and AWS Lambda function memory sizes, using machine learning to analyze historical utilization metrics. AWS Compute Optimizer provides a set of APIs and a console experience to help you reduce costs and increase workload performance by recommending the optimal AWS resources for your AWS workloads.

------------------------------



A high-performance file system is required for a financial modelling application. The data set will be stored on Amazon S3 and the storage solution must have seamless integration so objects can be accessed as files.



Amazon FSx for Lustre provides a high-performance file system optimized for fast processing of workloads such as machine learning, high performance computing (HPC), video processing, financial modeling, and electronic design automation (EDA). Amazon FSx works natively with Amazon S3, letting you transparently access your S3 objects as files on Amazon FSx to run analyses for hours to months.

----

"AWS DataSync" can be used to automate and accelerate the replication of data to AWS storage services. Note that Storage Gateway is used for hybrid scenarios where servers need local access to data with various options for storing and synchronizing the data to AWS storage services. Storage Gateway does not accelerate replication of data.

To deploy DataSync an agent must be installed. Then a task must be configured to replicated data to AWS. The task requires a connection to a service endpoint. To keep the data private and send it across the DX connection, a VPC endpoint should be used.

----

A software company has resources hosted in AWS and on-premises servers. You have been requested to create a decoupled architecture for applications which make use of both resources.


Amazon Simple Queue Service (SQS) and Amazon Simple Workflow Service (SWF) are the services that you can use for creating a decoupled architecture in AWS. Decoupled architecture is a type of computing architecture that enables computing components or layers to execute independently while still interfacing with each other.


### IAM DB Authentication
* With IAM database authentication, you don't need to use a password when you connect to a DB instance but instead, you use an authentication token.

* IAM database authentication is only supported in MySQL and PostgreSQL database engines

Partition keys in Dynamo DB


NAT Gateway 
	A NAT Gateway is a highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the Internet. NAT gateway is created in a specific Availability Zone and implemented with redundancy in that zone.

	You must create a NAT gateway on a public subnet to enable instances in a private subnet to connect to the Internet or other AWS services, but prevent the Internet from initiating a connection with those instances.

	If you have resources in multiple Availability Zones and they share one NAT gateway, and if the NAT gateway’s Availability Zone is down, resources in the other Availability Zones lose Internet access. To create an Availability Zone-independent architecture, create a NAT gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.
	
	

You can use Amazon EventBridge (Amazon CloudWatch Events) to run Amazon ECS tasks when certain AWS events occur. You can set up an EventBridge rule that runs an Amazon ECS task whenever a file is uploaded to a certain Amazon S3 bucket using the Amazon S3 PUT operation.



https://repost.aws/knowledge-center/connect-s3-vpc-endpoint
https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations
https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html


A launch template is a template that an Auto Scaling group uses to launch EC2 instances. When you create a launch template, you specify information for the instances, such as the ID of the Amazon Machine Image (AMI), the instance type, a key pair, one or more security groups, and a block device mapping. If you've launched an EC2 instance before, you specified the same information in order to launch the instance.

Use Client-Side Encryption – You can encrypt data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools.

Use Client-Side Encryption with AWS KMS–Managed Customer Master Key (CMK)
Use Client-Side Encryption Using a Client-Side Master Key


IAM Group is usually provided with an IAM Policy and not an IAM Role. There is no direct way in the AWS Management Console to manually assign an IAM Role to a particular IAM Group.

## Control Tower + Guard Rail (Practice test 4)

A guardrail is a high-level rule that provides ongoing governance for your overall AWS environment. It's expressed in plain language. Through guardrails, AWS Control Tower implements preventive or detective controls that help you govern your resources and monitor compliance across groups of AWS accounts.

A guardrail applies to an entire organizational unit (OU), and every AWS account within the OU is affected by the guardrail. Therefore, when users perform work in any AWS account in your landing zone, they're always subject to the guardrails that are governing their account's OU.


### Redshift
Redshift - OLAP
Datawarehouse. Typically, separated from the customer facing DB's. Data is extracted for decision making.
Perform complex queries over complex strcuteud and unstructured data


AWS Step functions

### Amazon EventBridge

Amazon EventBridge (Amazon CloudWatch Events) is a serverless event bus that makes it easy to connect applications together. It uses data from your own applications, integrated software as a service (SaaS) applications, and AWS services. This simplifies the process of building event-driven architectures by decoupling event producers from event consumers. This allows producers and consumers to be scaled, updated, and deployed independently. Loose coupling improves developer agility in addition to application resiliency.

You can integrate event bridge with S3 PUT event, target can be ECS cluster, to start a new task

https://aws.amazon.com/blogs/security/how-to-connect-your-on-premises-active-directory-to-aws-using-ad-connector/

https://docs.aws.amazon.com/lake-formation/latest/dg/how-it-works.html


--

Aurora DB cluster/Aurora Server Less

--

Workdocs
Amazon WorkDocs is commonly used to easily collaborate, share content, provide rich feedback, and collaboratively edit documents with other users. There is no direct way for you to integrate WorkDocs and an Amazon S3 bucket owned by a different AWS account

---

A company is building an automation tool for generating custom reports on its AWS usage. The company must be able to programmatically access and forecast usage costs on specific services.

Which of the following would meet the requirements with the LEAST amount of operational overhead?

Use the AWS Cost Explorer API with pagination to programmatically retrieve the usage cost-related data.
AWS Cost Explorer is a service provided by Amazon Web Services (AWS) that helps you visualize, understand, and analyze your AWS costs and usage. It provides a comprehensive set of tools and features to help you monitor and manage your AWS spending.

You can programmatically query your cost and usage data via the Cost Explorer API. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for DynamoDB database tables in your production environment.

----

Amazon Transcribe is an AWS service that makes it easy for customers to convert speech-to-text. Using Automatic Speech Recognition (ASR) technology, customers can choose to use Amazon Transcribe for a variety of business applications, including transcription of voice-based customer service calls, generation of subtitles on audio/video content, and conduct (text-based) content analysis on audio/video content.

Amazon Translate is a Neural Machine Translation (MT) service for translating text between supported languages.

Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find meaning and insights in text.

Amazon Lex is a fully managed artificial intelligence (AI) service with advanced natural language models that can help you design, build, test, and deploy conversational interfaces or chatbots

Amazon Kendra is a highly accurate and easy-to-use enterprise search service for all unstructured data that you store in AWS,

Amazon Detective is a security service that analyzes and visualizes security data to rapidly get to the root cause of your potential security issues.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html


---

Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required. For all but the largest archives (250 MB+), data accessed using Expedited retrievals are typically made available within 1–5 minutes. Provisioned Capacity ensures that retrieval capacity for Expedited retrievals is available when you need it.

To make an Expedited, Standard, or Bulk retrieval, set the Tier parameter in the Initiate Job (POST jobs) REST API request to the option you want, or the equivalent in the AWS CLI or AWS SDKs. If you have purchased provisioned capacity, then all expedited retrievals are automatically served through your provisioned capacity.

Provisioned capacity ensures that your retrieval capacity for expedited retrievals is available when you need it. Each unit of capacity provides that at least three expedited retrievals can be performed every five minutes and provides up to 150 MB/s of retrieval throughput. You should purchase provisioned retrieval capacity if your workload requires highly reliable and predictable access to a subset of your data in minutes. Without provisioned capacity Expedited retrievals are accepted, except for rare situations of unusually high demand. However, if you require access to Expedited retrievals under all circumstances, you must purchase provisioned retrieval capacity.

https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html

https://docs.aws.amazon.com/amazonglacier/latest/dev/glacier-select.html




