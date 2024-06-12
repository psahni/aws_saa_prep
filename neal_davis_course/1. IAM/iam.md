(Section 2/13)

IAM principes must be authenticated
AWS determines whether to auth the request (allow/deny)
IAM principes can be a person or an application

auth can be for an action or operation on aws resource
resource can be EC2, S3

Decision is based on policy
    Identity based policy
    Resource based policy

User has username and password
CLI/App has key and secret


------------------------------------------------------------

Authentication:-

MFA

Virtual: password + auth token(otp) like google auth

Hardware device

security keys and time based otp

The author activated MFA for neal user

I went to user list in IAM, and it was showing Enable MFA


------------------------------------------------------------

* IAM passoword policy

You can set password policy 
Ability to change password is provided by IAM permisisons (checkbox of permissions)
By default it was not there.

Author is happy with the default password policy

------------------------------------------------------------

Identity based policies and resource based policies
 
* User
* Group
* Role

Policy is JSON doc

Inline   Policy - It cant be shared. Created for specific UGR
Managed  Policy - It can be customer managed or AWS managed, can be applied to one or more UGR
Resource Policy - Applies to AWS resource like S3 resource, can be applied to User or IAM role
    - A trust based plicy is resource based ..
    - A permission ... is an identity policy
    An IAM role have these two types of policies above


D:\Prashant\aws_saa_prep\neal_davis_course\IAM

------------------------------------------------------------

Permisison Boundires

You may have IAM full access, but when you create a IAM user it has limited permissions

------------------------------------------------------------

IAM Policy Evaluation ( 2/20 )

Little complex topic, watch again

One take aways is if one user has Identity based policy and resource (S3) has resource based policy, then the evaluation will be Either Or based.

------------------------------------------------------------
IAM Policy Structure
--------------------------------------------------------------------------------------------------------------

IAM Policy Simulator

You have policy and a resource, you can check which actions or API's (permisisons) are allowed access for that policy and resource


Example:-
Policy - AwsEc2Access
Resource - Amazon Ec2

Click - Select all permisions

It will list down all permissions that are allowed access and denied

You can whitlist the IP classes in your policy documents
---------------------------------------------------------------------------------------------------------------
Access Evalutation Tools
---------------------------------------------------------------------------------------------------------------
IAM Best Practices (Re-Watch)


If you already manage user identities outside of AWS, you can use identity providers instead of creating IAM users in your AWS account. With an identity provider (IdP), you can manage your user identities outside of AWS and give these external user identities permissions to use AWS resources in your account. This is useful if your organization already has its own identity system, such as a corporate user directory. It is also useful if you are creating a mobile app or web application that requires access to AWS resources.

Identity providers and federation

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html

-----------------------------------------------------------------------
 Exam cram (Watch again)
 Most of the content is common sense, so just watch normally

------------------------------------------------------------------------
Arch Patterns

* What is the best practice for applying permissions to many users who perform the same job role?
Add to group and assign policy

* Delegate permisisons using Roles

* Grant least privileges is an IAM Best Practices that makes sure users only have access to what they need and nothing more




### Secure DB with IAM Role

The best way to secure this solution is to get rid of the credentials completely by using an IAM role instead. The IAM role can be assigned permissions to access the database instance and can be attached to the EC2 instance. The instance will then obtain temporary security credentials from AWS STS which is much more secure.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html

### Profile credentials for EC2

. To protect the confidential data of your customers, you have to ensure that your RDS database can only be accessed using the profile credentials specific to your EC2 instances via an authentication token.


