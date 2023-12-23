With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

The following diagram shows an example VPC. The VPC has one subnet in each of the Availability Zones in the Region, EC2 instances in each subnet, and an internet gateway to allow communication between the resources in your VPC and the internet.

https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

Region
    AZ's
        Public Subnet
        Private Subnet

Redundant Network
Redundant Power Sources

--------------------

AWS Security Group

A security group controls the traffic that is allowed to reach and leave the resources that it is associated with. For example, after you associate a security group with an EC2 instance, it controls the inbound and outbound traffic for the instance.

When you create a VPC, it comes with a default security group. You can create additional security groups for a VPC, each with their own inbound and outbound rules

VPC with a subnet, an internet gateway, and a security group. The subnet contains an EC2 instance. The security group is assigned to the instance. The security group acts as a virtual firewall. The only traffic that reaches the instance is the traffic allowed by the security group rules. For example, if the security group contains a rule that allows ICMP traffic to the instance from your network, then you could ping the instance from your computer. If the security group does not contain a rule that allows SSH traffic, then you could not connect to your instance using SSH.

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

--------------------

Control traffic to subnets using network ACLs


A network access control list (ACL) allows or denies specific inbound or outbound traffic at the subnet level. You can use the default network ACL for your VPC, or you can create a custom network ACL for your VPC with rules that are similar to the rules for your security groups in order to add an additional layer of security to your VPC.


--------------------


AWS Cloud Front

Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.


If the content is not in that edge location, CloudFront retrieves it from an origin that you've defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.

--

IPv4 Primar

192.168.0.1

Here 1 is a Host ID
The first 3 are Network ID

Subnet mask
255.255.255.0

It is used to define the network and host Id

A network and subnet mask can be written in this format -> 192.168.0.0/24

255.255.255 are 8+8+8 => 24 bits

--
CIDR - classless interdomain routing

192.168.0.1 --- 192.168.0.254
8 host bits 254 addresses
16 host bits 65,534 addresses

Subnet mask generator (Must check)
https://www.site24x7.com/tools/ipv4-subnetcalculator.html

