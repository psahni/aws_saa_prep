### CUSTOM METRICS
CloudWatch has available Amazon EC2 Metrics for you to use for monitoring. 

CPU Utilization identifies the processing power required to run an application upon a selected instance. 

Network Utilization identifies the volume of incoming and outgoing network traffic to a single instance. 

Disk Reads metric is used to determine the volume of the data the application reads from the hard disk of the instance. This can be used to determine the speed of the application. However, there are certain metrics that are not readily available in CloudWatch such as memory utilization, disk space utilization, and many others which can be collected by setting up a custom metric.

so CPU Utilization of an EC2 instance, Disk Reads activity of an EC2 instance, and Network packets out of an EC2 instance are available in cloud watch, so no custom metrics needed

You need to prepare a custom metric using CloudWatch Monitoring Scripts which is written in Perl. You can also install CloudWatch Agent to collect more system-level metrics from Amazon EC2 instances. Here's the list of custom metrics that you can set up:

- Memory utilization
- Disk swap utilization
- Disk space utilization
- Page file utilization
- Log collection