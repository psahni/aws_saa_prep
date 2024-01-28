
Private access to public services such as Amazon S3 can be achieved by creating a VPC endpoint in the VPC. For S3 this would be a gateway endpoint. The bucket policy can then be configured to restrict access to the S3 endpoint only which will ensure that only services originating from the VPC will be granted access.

![Alt text](image.png)

Create VPC end point and S3 gateway point
Bucket will only receive access requests from S3 gateway point

EC2 instance will connect via private IP.
