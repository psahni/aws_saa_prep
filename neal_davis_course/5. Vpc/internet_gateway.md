### Configuration for internet access

To enable your instances to receive or send traffic from the internet, do the following:

* Create an internet gateway and attach it to your VPC.

* Add a route to the route table for the subnet that directs internet-bound traffic to the internet gateway.

* Ensure that instances in your subnet have a public IPv4 address or an IPv6 address. For more information, see Instance IP 
  addressing in the Amazon EC2 User Guide.

* Ensure that your security groups and network access control lists allow the desired internet traffic to flow to and from 
  your instances.


To provide your instances with internet access without assigning them public IP addresses, use a NAT device instead. A NAT device enables instances in a private subnet to connect to the internet, but prevents hosts on the internet from initiating connections with the instances


https://docs.aws.amazon.com/vpc/latest/userguide/vpc-igw-internet-access.html


### Public and private subnets

If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet. If a subnet is associated with a route table that does not have a route to an internet gateway, it's known as a private subnet.