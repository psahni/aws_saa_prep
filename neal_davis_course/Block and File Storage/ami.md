### HOL

- Author created an image from the running windows instance
- Image is created with two snapshots of the volumns
- Then he launched an instance in another AZ's by selecting same image from my AMI's
- New instance will have the same password to connect to.


### Cross Region Availability in case of disaster

You can copy an Amazon Machine Image (AMI) within or across AWS Regions using the AWS Management Console, the AWS Command Line Interface or SDKs, or the Amazon EC2 API, all of which support the CopyImage action.

Using the copied AMI the solutions architect would then be able to launch an instance from the same EBS volume in the second Region.

