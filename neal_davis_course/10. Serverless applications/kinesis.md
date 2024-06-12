### Kinesis Data Streams

You can use Amazon Kinesis Data Streams to collect and process large streams of data records in real time. You can create data-processing applications, known as Kinesis Data Streams applications(Like Firehose). A typical Kinesis Data Streams application reads data from a data stream as data records. These applications can use the Kinesis Client Library, and they can run on Amazon EC2 instances. You can send the processed records to dashboards, use them to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services like S3 and Redshift

KDS can continuously capture gigabytes of data per second from hundreds of thousands of sources.

### Kinesis Data Streams + Lambda + DynamoDB (NoSQL)
Kinesis Data Streams integrates seamlessly with AWS Lambda, which can be utilized to transform and anonymize the Personally Identifiable Information (PII) in transit prior to storage. This ensures that sensitive information is appropriately anonymized at the earliest opportunity, significantly reducing the risk of any data breaches or privacy violations. Finally, the anonymized data is stored in Amazon DynamoDB, a NoSQL database suitable for handling the processed data.

https://docs.aws.amazon.com/streams/latest/dev/introduction.htm
https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html

### Amazon Kinesis Data Firehose 

Amazon Kinesis Data Firehose can send data to:

- Amazon S3
- Amazon Redshift
- Amazon Elasticsearch Service
- Splunk


To do the same thing with Amazon Kinesis Data Streams, you would need to write an application that consumes data from the stream and then connects to the destination to store data.


So, think of Firehose as a pre-configured streaming application with a few specific options. Anything outside of those options would require you to write your own code.


Amazon Kinesis Data Firehose which can ingest data and load it directly to a data store where it can be subsequently processed

### Client facing 503 issues while sending real time data for processing.

Q. A company provides a REST-based interface to an application that allows a partner company to send data in near-real time. The application then processes the data that is received and stores it for later analysis. The application runs on Amazon EC2 instances.

The partner company has received many 503 Service Unavailable Errors when sending data to the application and the compute capacity reaches its limits and is unable to process requests when spikes in data volume occur.

Which design should a Solutions Architect implement to improve scalability?

A. Amazon Kinesis enables you to ingest, buffer, and process streaming data in real-time. Kinesis can handle any amount of streaming data and process data from hundreds of thousands of sources with very low latencies. This is an ideal solution for data ingestion.

Lambda Use Case:-

To ensure the compute layer can scale to process increasing workloads, the EC2 instances should be replaced by AWS Lambda functions. Lambda can scale seamlessly by running multiple executions in parallel.

### Performance of the Kinesis Data Streams

If your data rate increases, you can also increase the number of shards allocated to your stream to maintain the application performance. You can reshard your stream using the "UpdateShardCount" API. The throughput of an Amazon Kinesis data stream is designed to scale without limits via increasing the number of shards within a data stream.

