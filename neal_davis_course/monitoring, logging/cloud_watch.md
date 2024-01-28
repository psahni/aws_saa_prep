Cloud watch
    Perf. Monitoring tool
    When configured via a CLI, then detailed cloudWatch monitoring will be enabled by default

    You can configure rules in Amazon CloudWatch Events to alert you to changes in AWS services and integrate these events with other third-party systems using Amazon EventBridge. The following are the AWS DevOps related services that have integration with CloudWatch Events.


    Q. An application is being monitored using Amazon GuardDuty. A Solutions Architect needs to be notified by email of medium to high severity events. How can this be achieved?

    A. CloudWatch Events rule can be used to set up automatic email notifications for Medium to High Severity findings to the email address of your choice. You simply create an Amazon SNS topic and then associate it with an Amazon CloudWatch events rule.



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


### Unified cloud agent
    * System level metrics like disk and memory 
    Example
        Ec2 sends CPU utilization metric to CW and CW then triggers an alarm to EC2 auto scale service

    Issue: Insufficient SWAP space
    The unified CloudWatch agent enables you to collect internal system-level metrics from Amazon EC2 instances across operating systems. The metrics can include in-guest metrics, in addition to the metrics for EC2 instances. The metrics that are collected include swap_free, swap_used, and swap_used_percent.

### Amazon CloudWatch Container Insights

(Just like Datadog kube monitoring)

Amazon CloudWatch Container Insights helps customers collect, aggregate, and summarize metrics and logs from containerized applications and microservices. Metrics data is collected as performance log events using the embedded metric format. These performance log events use a structured JSON schema that enables high-cardinality data to be ingested and stored at scale. From this data, CloudWatch creates aggregated metrics at the cluster, node, pod, task, and service level as CloudWatch metrics. The metrics that Container Insights collects are available in CloudWatch automatic dashboards. Container Insights are available for Amazon EKS clusters with self managed node groups, managed node groups and AWS Fargate profiles.


