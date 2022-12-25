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

