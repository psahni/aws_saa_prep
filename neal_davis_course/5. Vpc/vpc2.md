VPC Peering

VPC's in various Regions. Networking between them.

Create Two VPC in 2 Regions

Creating Peering Connection

Allow in Security Groups
Route Table entries in each to allow each other traffic

-----

Endpoints

* With ENI private instance inside VPC can connect to aws services privately.
    Example - API gateway, Cloudformation
* With Gateway Endpoint, it has a routing table that has entry to VPC of the target service.
    Example - S3, Dynamo DB

Create VPC with S3Gateway
Create EC2 instance with IAM Role AllowS3

### How To Prevent DB calls from Traversing the Internet (Dynamo DB)

The AWS IAM authenticator for Kubernetes is integrated into the EKS cluster for role-based access control (RBAC) and cluster authentication. A solutions architect must improve network security by preventing database calls from traversing the public internet. An automated cross-account backup for the DynamoDB table is also required for long-term retention.


Create a DynamoDB gateway endpoint. Associate the endpoint to the appropriate route table. Use AWS Backup to automatically copy the on-demand DynamoDB backups to another AWS account for disaster recovery.

Since DynamoDB tables are public resources, applications within a VPC rely on an Internet Gateway to route traffic to/from Amazon DynamoDB. You can use a Gateway endpoint if you want to keep the traffic between your VPC and Amazon DynamoDB within the Amazon network. This way, resources residing in your VPC can use their private IP addresses to access DynamoDB with no exposure to the public internet.

---

AWS Client VPN

Client has route table entry for the target

In general client connects to VPN. All traffic is sent to VPN server with encryption
Now VPN server decrypts it and sends it to destination

---

Site to Site
Organizations can connect to AWS infra VPC's through VPN gateways and their own VPN Gateway (refer pic)

----------------------------------------------------------------------

### Cloud Hub

Its an arch. pattern

We connect multiple customer gateway to single VPN of aws

The AWS VPN CloudHub operates on a simple hub-and-spoke model that you can use with or without a VPC. Use this approach if you have multiple branch offices and existing internet connections and would like to implement a convenient, potentially low-cost hub-and-spoke model for primary or backup connectivity between these remote offices.

See (aws-vpn-cloudhub.png)

BGP - Border gateway protocol - Connect autonomous systems on internet

----------------------------------------------------------------------

### AWS direct connect (DX)

Private line
DX connections are not encrypted
Use an IPSec S2S VPN connection over a VIF (Virtual inteface) to add encryption in transit
VIF is between the VP gateway of VPC and Aws DX location

AWS Direct Connect Gateway

Allow DX connectivity to between regions and one coorporate office

----------------------------------------------------------------------

### AWS Transit Gatway

In order to connect Multiple VPC's a transit hub is used.
Corporate office is connect to transit hub

So a DX connection can also be made to transit hub

--
IpV6 protocol in VPC

128 bits
--

### Flow Logs

Up until now, AWS customers collected this data by installing agents on their Amazon Elastic Compute Cloud (Amazon EC2) instances. Doing so imposed some overhead on each instance, and also provided a view that was limited to network flows that were visible to the instance.

New VPC Flow Logs

In order to provide better support for this important aspect of network monitoring, we are introducing Flow Logs for the Amazon Virtual Private Cloud (Amazon VPC).  Once enabled for a particular VPC, VPC subnet, or Elastic Network Interface (ENI), relevant network traffic will be logged to CloudWatch Logs for storage and analysis by your own applications or third-party tools.

You can create alarms that will fire if certain types of traffic are detected; you can also create metrics to help you to identify trends and patterns.

The information captured includes information about allowed and denied traffic (based on security group and network ACL rules). 

--
Egress only internet Gateway allows outbound traffic for EC2 instances that has IPV6 addresses

--
A Security Group can be applied to the group of EC2 instances. You can specify what ports and protocols are allowed to reach the instances and from what sources.
