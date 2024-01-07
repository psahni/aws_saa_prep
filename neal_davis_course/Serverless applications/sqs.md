### Scaling based on Amazon SQS

You can scale your auto scaling group in response to the load in SQS queues

https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html

### Trivia: How to assign permssion to AWS account to send messages to SQS queue

Update the permission policy on the SQS queue to grant the sqs:SendMessage permission to the partner’s AWS account


### Basic examples of Amazon SQS policies

Example 1: Grant one permission to one AWS account

```
{
   "Version": "2012-10-17",
   "Id": "Queue1_Policy_UUID",
   "Statement": [{
      "Sid":"Queue1_SendMessage",
      "Effect": "Allow",
      "Principal": {
         "AWS": [ 
            "111122223333"
         ]
      },
      "Action": "sqs:SendMessage",
      "Resource": "arn:aws:sqs:us-east-2:444455556666:queue1"
   }]  
}
```


https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-examples-of-sqs-policies.html


### Trivia:

Q. A new application will run across multiple Amazon ECS tasks. Front-end application logic will process data and then pass that data to a back-end ECS task to perform further processing and write the data to a datastore. The Architect would like to reduce-interdependencies so failures do no impact other components.

A. This is a good use case for Amazon SQS. SQS is a service that is used for decoupling applications, thus reducing interdependencies, through a message bus. The front-end application can place messages on the queue and the back-end can then poll the queue for new messages. Please remember that Amazon SQS is pull-based (polling) not push-based (use SNS for push-based).
