* You can create multiple AWS account one for production and one for development
and link it with organization account which Manage AWS Account 

* There will be service policies in management account which will control the API access on other accounts.

* You get consolidated billing


* We add aws account from aws organization account

* Enable Service Control policies (SCP)
    FullAccessAws

* SCP controls max available permissions

* You need to assign IAM roles also

* You can create a policy for example, that Dev account users will only able to launch t2 micro instance, but have full access. IAM role gives ability to perform action as per policy

* A prod account is created underneath Dev account.

Lecture 79, I could not understand fully. Long hands on.
Basically He controlled the permission of prod account from management account.
He created policy and assign it to role, to deny certain permissions.

AWS Control Tower
    - Landing Zone




