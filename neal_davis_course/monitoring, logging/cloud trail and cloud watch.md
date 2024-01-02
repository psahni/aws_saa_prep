Cloud watch
    Perf. Monitoring tool
    When configured via a CLI, then detailed cloudWatch monitoring will be enabled by default

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


Unified Agent
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html

    - Custom metrics from various AWS resources