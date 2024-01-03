Cloud watch
    Perf. Monitoring tool
    When configured via a CLI, then detailed cloudWatch monitoring will be enabled by default

    You can configure rules in Amazon CloudWatch Events to alert you to changes in AWS services and integrate these events with other third-party systems using Amazon EventBridge. The following are the AWS DevOps related services that have integration with CloudWatch Events.



    Application Auto Scaling Events
    CodeBuild Events
    CodeCommit Events
    CodeDeploy Events
    CodePipeline Events

Usecases
    Metrics
    Alarms
    Logs
    Events


    Unified cloud agent
        System level metrics like disk and memory 


    Example
        Ec2 sends CPU utilization metric to CW and CW then triggers an alarm to EC2 auto scale service

CloudTrail
    Auditing - Who did what
    Api actions: Everything is api in aws, so it is tracked via cloudtrail

    Types of events
        - Management events
        - Data events
        - Insight events

    You can use AWS CloudTrail to record AWS API calls and other activity for your AWS account and to save the recorded information to log files in an Amazon Simple Storage Service (Amazon S3) bucket that you choose. By default, the log files that CloudTrail puts in your S3 bucket are encrypted using server-side encryption with Amazon S3–managed encryption keys (SSE-S3).

    CloudTrail captures all API calls to AWS KMS as events, including calls from the AWS KMS console, AWS KMS APIs, AWS CloudFormation templates, the AWS Command Line Interface (AWS CLI), and AWS Tools for PowerShell.


Unified Agent
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html

    - Custom metrics from various AWS resources