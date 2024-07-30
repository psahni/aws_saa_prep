### CloudTrail
    Auditing - Who did what
    Api actions: Everything is api in aws, so it is tracked via cloudtrail

    Types of events
        - Management events
        - Data events
        - Insight events

    You can use AWS CloudTrail to record AWS API calls and other activity for your AWS account and to save the recorded information to log files in an Amazon Simple Storage Service (Amazon S3) bucket that you choose. 
    
### Default Encryption
By default, the log files that CloudTrail puts in your S3 bucket are encrypted using server-side encryption with Amazon S3–managed encryption keys (SSE-S3). But you can choose to do it by AWS KMS

CloudTrail captures all API calls to AWS KMS as events, including calls from the AWS KMS console, AWS KMS APIs, AWS CloudFormation templates, the AWS Command Line Interface (AWS CLI), and AWS Tools for PowerShell.


Unified Agent
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html

- Custom metrics from various AWS resources


### Creating a trail for an organization

If you have created an organization in AWS Organizations, you can create a trail that logs all events for all AWS accounts in that organization. This is sometimes called an organization trail.

When you create an organization trail, a trail with the name that you give it is created in every AWS account that belongs to your organization. Users with CloudTrail permissions in member accounts can see this trail when they log into the AWS CloudTrail console from their AWS accounts, or when they run AWS CLI commands such as describe-trails. However, users in member accounts do not have sufficient permissions to delete the organization trail, turn logging on or off, change what types of events are logged, or otherwise change the organization trail in any way.


https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html