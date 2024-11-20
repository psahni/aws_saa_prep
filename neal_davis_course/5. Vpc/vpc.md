CIDR Blocks


10.0.1.0/24 (Subnet) => Each Subnet Will have 255 addresses
10.0.2.0/24 (Subnet) => Each Subnet Will have 255 addresses


CIDR blocks can only be setup once

----------------------------------------------------------

Create VPC
    10.0.0.0/16

Create Subnets
    2 Private 2 Public (All are created in one go with diff AZ)

    For Public Subnets, enable IPv4 setting

Create Route Table
    Associate VPC
    Associate Subnets
        Author chose Private 1-A and Private 1-B

Create Internet Gateway


Launch an EC2 instance
    Choose the right VPC while creating EC2 instance



https://www.linkedin.com/pulse/connecting-internet-from-ec2-instance-private-subnet-aws-thandra/


AWS Security Groups VS NACL — What’s The Difference

https://gocloudtech.medium.com/aws-security-groups-vs-nacl-whats-the-difference-a38b9eb6796b

