

Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers). Publishers communicate asynchronously with subscribers by sending messages to a topic, which is a logical access point and communication channel. Clients can subscribe to the SNS topic and receive published messages using a supported endpoint type, such as Amazon Kinesis Data Firehose, Amazon SQS, AWS Lambda, HTTP, email, mobile push notifications, and mobile text messages (SMS).



https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html


API Gateway - REST And HTTP
https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html


Create an SQS queue to serve as an event source for your Lambda function. Then configure the queue to allow time for your Lambda function to process each batch of events—and for Lambda to retry in response to throttling errors as it scales up.


https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-queueconfig


For stream based service like aws Kinesis, the event source mapping is configured at Aws lambda.
For non stream based service like API Gateway, the event source mapping is configured at API gateway.

-----------------------------------------------------------------------------


