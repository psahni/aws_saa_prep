### AWS Organiztion
* You can create multiple AWS account one for production and one for development
and link it with organization account which Manage AWS Account 

* There will be service policies in management account which will control the API access on other accounts.

* You get consolidated billing


* We add aws account from aws organization account

AWS Organizations is an account management service that lets you consolidate multiple AWS accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. You can organize those accounts into groups and attach policy-based controls.


------------------------------------------------------------------------

### Service Control Policy
* Enable Service Control policies (SCP)
    FullAccessAws

* SCP controls max available permissions

* You need to assign IAM roles also

* You can create a policy for example, that Dev account users will only able to launch t2 micro instance, but have full access. IAM role gives ability to perform action as per policy

* To apply the restrictions across multiple member accounts you must use a Service Control Policy (SCP) in the AWS Organization. The way you would do this is to create a deny rule that applies to anything that does not equal the specific instance type you want to allow.

. With IAM you need to apply the policy within each account rather than centrally so this would require much more effort.

------------------------------------------------------------------------

* A prod account is created underneath Dev account.

Lecture 79, I could not understand fully. Long hands on.
Basically He controlled the permission of prod account from management account.
He created policy and assign it to role, to deny certain permissions.

### AWS Control Tower
    - Builds Landing Zone

AWS Control Tower offers the easiest way to set up and govern a secure, compliant, multi-account AWS environment based on best practices established by working with thousands of enterprises

- Provisioning of accounts and infra
- Adhere to coorporate standards
- Follow best practices
    - For example, you can use controls to help ensure that security logs and necessary cross-account access permissions are created, and not altered.
- AWS Control Tower orchestration extends the capabilities of AWS Organizations. 

Usecase
-  Use AWS Control Tower to launch a landing zone to automatically provision and configure new accounts through an Account Factory. Utilize the AWS Control Tower dashboard to monitor provisioned accounts across your enterprise. Set up preventive and detective guardrails for policy enforcement.

------------------------------------------------------------------------


###  AWS Resource Access Manager (RAM)

 AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization. It is not used for restricting access or permissions.


AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization. You can share AWS Transit Gateways, Subnets, AWS License Manager configurations, and Amazon Route 53 Resolver rules resources with RAM.

You can procure AWS resources centrally, and use RAM to share resources such as subnets or License Manager configurations with other accounts. This eliminates the need to provision duplicate resources in every account in a multi-account environment, reducing the operational overhead of managing those resources in every account.
