### There are 5 pillars for well architected application:-
1. Cost
2. Performance
3. Reliability
4. Security
5. Operational Excellence



<img width="670" alt="image" src="https://user-images.githubusercontent.com/84832/222943550-0d0f5983-3217-4729-842a-4b583c3e4560.png">




* We store session data in Elastic cache. (When sticky session is not implemented)
* We also use Elastic cache for caching DB Data

--

* EBS does not allow you to share data, in case of multi AZ, so use EFS with ENI.
* EBS is cheaper
* Aurora allows you to create READ replicas very easily. Scaling is easy.
* EFS is a network file system (NFS) that allows you to mount the same file system to 100s of EC2 instances. 
  Storing software updates on an EFS allows each EC2 instance to access them.



<img width="1105" alt="image" src="https://user-images.githubusercontent.com/84832/224546321-1f1293c4-6bb2-4791-9720-fe69d91f62c6.png">

* Elastic Bean Stalk is the developer friendly way to deploy same kind of stack more than
* Most stacks are same -> Elastic Load Balancer +. Auto Scaling Group
* It is a hybrid approach - AMI + User Data


* Golden AMI is an image that contains all your software installed and configured so that future EC2 instances can boot up quickly from that AMI.


<img width="730" alt="image" src="https://user-images.githubusercontent.com/84832/224598559-d0c707a9-6a26-4a47-90d9-99d051c5dd93.png">

