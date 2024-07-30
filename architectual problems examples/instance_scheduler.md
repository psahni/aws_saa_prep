https://dev.to/microtica/a-step-by-step-guide-to-aws-instance-scheduler-14lj


You need to create a cloud formation template to create a instance schedular

This CloudFormation template creates an environment for the AWS Instance Scheduler. The solution uses the following AWS services:

Amazon CloudWatch
AWS Lambda
Amazon DynamoDB
AWS RDS
AWS EC2

1. Create AWS cloud watch event
2. Save the scheuling data in Dynmamo DB
3. Create Lambda function to access EC2 api
4. Cloud watch event will trigger Lambda
5. Lambda will query Dynamo DB
6. Lambda will call EC2 api to turn it on/off