## Public and Private IP
* Private IP is used most (IPv4)
* IPv6 are hexa decimals used in IoT
* Computers in Private network have internet gateway which has public IP that connects them to outer world.
* Elastic IP is the fixed IP, one can have max 5 in AWS, which can be increased
* Normally it is recommeded to have 1 random Ip, and assing DNS to it. 
* Use of Load balancers and not using Public IP
* If you stop and then start, your public IP will change.
* Reboot(restart) will not change the public ip, but start stop will


## Placement Groups
* Startegy to control EC2 instances
* Cluster, Spread, Partition
* Cluster - Same Rack, Same Availability Zone, low latency
  * If the Rack fails, then every instance fails
  * Advantage is low latency but, high network throughput
  * Eg: Big data applications
* Spread - Spread across multiple AZ, low risk of simultaneous failure becz each instance is on the different hardware
* Partition - Each partition can have multiple EC2 instances
  * Upto 7 partitions in one AZ
  * Upto 100s of Ec2 insta
  * Can spread across multiple AZ's
  * A partition fail can affect ec2 instances on same parti. but does not affect the other ones
  * Big data apps like Kafka, Cassandra, HDFS

## Elastic netwrok interfaces
* Its a network card attached to your EC2 instance
* if you’re running on EC2—the default interface, eth0, is attached to an ENI that was created when you launched the instance, and is used to handle all traffic sent and received from the instance.
* You’re not limited to just one network interface though—attaching a secondary network interface allows you to connect your EC2 instance to two networks at once, which can be very useful when designing your network architecture. You can use them to host load balancers, proxy servers, and NAT servers on an EC2 instance, routing traffic from one subnet to another.

## EC2 Hibernate
* On hibernation, data of RAM is copied into EBS, and when the system starts, all RAM data is restored, so start time is faster
* From OS perspective, it is never stopped when you do hibernation
