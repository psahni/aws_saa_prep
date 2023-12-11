Host server has multiple EC2 servers

AMI (os image) - config of the os that will run on the EC2 instance
AMI is created from EBS snapshot (backup of the instance)

--

Creating EC2 instance

Its very easy to launch
Key points:-
    - Security groups
    - VPC
    - Creating a Key pair for SSH access
    - After the launch is done, there are num of tabs available in the detail page of the instance like networking inbound and outbound rules
    - Monitoring is also available

--

Connect Via SSH

Create Key-Pair under Network & Security Left meny

When you ssh from lcoal machine, permission error may come

$ chmod 600 yourfile.pem

SSH into EC2 in Private Subnet
https://digitalcloud.training/ssh-into-ec2-in-private-subnet/

1. Install msys package under MinGW
2. Add following entries in your PATH env variable.
C:\MinGW\bin
C:\MinGW\msys\1.0\bin

Then run your command from normal windows command prompt.

--
RDP to windows

We have to update the Inbound rules for RDP access
Its available inside security groups setting

Port 3389
--
User and Metadata

httpd is a example web service to run on local machine

You can run certain commands when the instance starts to run or boot up.
So User data is ability to run the commands

Instance metadata - curl http://169.254.169.254/latest/meta-data - information about the instance

--
Access Services - Access Keys and IAM Roles

EC2 instance can be given a role, and that role has a policy attached to it
that role and policy allows the instance to access the resource
so no use of Key pair here.

--

IAM -> Users -> Select User -> Security Credentials -> Access Keys
 
aws configure

It will ask for access key info

cd ~/.aws
you will see credentails file which has access key and Id stored passed by your on cmd line

But we can also create role for performing the above operation instead of access keys

Create role and assign it to Ec2 instance

Select Ec2 instance, in the actions menu select security and then modify IAM roles

Then when author runs $ aws s3 ls command, they can see the list of buckets

Instance is able to assume the role

---
Monitoring

Cloud watch is monitoring tool and services at aws send metrics to cloud watch

Cloud Watch => Metrics => All Metrics

U can search by instanceID

--
EC2 placement groups

Cluster   -> Low latency + tightly coupled, very close in same AZ 
    Copy the data so that if one fails other is available
    Good when you require high throughput network traffic between instances


Partition -> Used by distri. and replicated workloads like Hadoop, no sql data. 
    One partition does not share hardware, can be diff hardwares
    Copy the data so that if one fails other is available
    Separate Aws racks
    can upto 7 availability zones

Spread -> Instances located on diff hardwares
    Separate Aws racks
    Small num of critical instances that should be kept separate from each other

--
Network Interfaces

When choose subnet while creating a EC2 instance, we attach an adaptor to it
Multiple adaptors can be attached to a single EC2 instance, but they have to be in same AZ
Subnet can be private and public.

ENI (Elastic Network interface) is the most adaptor and can be used with all instance types

EFA is good for High Performance Computing, MPI and ML use cases, tightly coupled applications and can be used with all instance types.

--
Public, Private and Elastic IP addresses

Elastic IP is static address. They can re-mapped to different adaptors/instances across diff AZ

--


