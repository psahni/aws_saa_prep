### ENI

Essentially, ENIs are virtual network cards you can attach to your EC2 instances. They are used to enable network connectivity for your instances, and having more than one of them connected to your instance allows it to communicate on two different subnets.


You're not limited to just one network interface though---attaching a secondary network interface allows you to connect your EC2 instance to two networks at once, which can be very useful when designing your network architecture. You can use them to host load balancers, proxy servers, and NAT servers on an EC2 instance, routing traffic from one subnet to another.

https://www.howtogeek.com/devops/what-are-aws-elastic-network-interfaces-enis-and-how-do-you-use-them/

### Elastic Fabric Adapter

An Elastic Fabric Adapter is an AWS Elastic Network Adapter (ENA) with added capabilities. The EFA lets you apply the scale, flexibility, and elasticity of the AWS Cloud to tightly-coupled HPC apps. It is ideal for tightly coupled app as it uses the Message Passing Interface (MPI).

Use Case:-
A legacy tightly-coupled High Performance Computing (HPC) application will be migrated to AWS, so use EFA in this case. Other example - Machine learning apps