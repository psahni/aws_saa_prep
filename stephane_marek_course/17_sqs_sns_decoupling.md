https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html


* Amazon SQS is a managed service that offers "hosted queues" that let you integrate and decouple distributed software systems and components. This is bazsed on polling.
* Consumers Polls, Consumer Receives the message, Consumer Deletes the message

* There are three main parts in a distributed messaging system: the components of your distributed system, your queue (distributed on Amazon SQS servers), 
and the messages in the queue.

* In the following scenario, your system has several producers (components that send messages to the queue) and consumers (components that receive messages from the queue). 

* The queue (which holds messages A through E) redundantly stores the messages across multiple Amazon SQS servers.

* Amazon SNS (Simple Notification Service) is also a managed messaging service, but it provides message delivery from publishers to subscribers (also known as producers and consumers). 
* Publishers communicate asynchronously with subscribers by sending messages to a topic, which is a logical access point and communication channel. 
* Clients can subscribe to the Amazon SNS topic and receive published messages using a supported endpoint type, such as -
* Amazon Kinesis Data Firehose, Amazon SQS, Lambda, HTTP, email, mobile push notifications, and mobile text messages (SMS).

* Rabbit MQ - Message broker app. Receiver and Producer. 


