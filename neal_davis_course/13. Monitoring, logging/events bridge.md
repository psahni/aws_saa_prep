### Event Bridge

* Amazon EventBridge (Amazon CloudWatch Events) is a serverless event bus that makes it easy to connect applications together. It uses data from your own applications, integrated software as a service (SaaS) applications, and AWS services. 

* This simplifies the process of building event-driven architectures by decoupling event producers from event consumers. This allows producers and consumers to be scaled, updated, and deployed independently. Loose coupling improves developer agility in addition to application resiliency.

* It is much simpler to control ECS tasks directly as targets for the CloudWatch Event rule. Take note that the scenario asks for a solution that is the easiest to implement. So better than lambda


### Usecase:-
. The minimum ECS task count is initially set to 1 to save on costs and should only be increased based on new objects uploaded to the S3 bucket.

You can use Amazon EventBridge (Amazon CloudWatch Events) to run Amazon ECS tasks when certain AWS events occur. 
You can set up an EventBridge rule that runs an Amazon ECS task whenever a file is uploaded to a certain Amazon S3 bucket using the Amazon S3 PUT operation.

----------------------------------------------------------------------

It used to be cloud watch events

XRay

API tracing
    req and respo tracing
    calls to AWS resources, microservices
    Generates Trace Map

XRay can send traces to Grafana, which you can visualize

### Usecase to check if SSL certification is expired (CERTIFICATION EXPIRE)
- Event Bridge rule to check AWS Health or ACM expiration event related to ACM certificates.
- Event Bridge rule to check the "DaysToExpiry" metric of all ACM certificates in Amazon CloudWatch. Schedule it to run everyday.

### ACM Events

-AWS_ACM_RENEWAL_STATE_CHANGE (the certificate has been renewed, has expired, or is due to expire)
-CAA_CHECK_FAILURE (CAA check failed)
-AWS_ACM_RENEWAL_FAILURE (for certificates signed by a private CA)

* AWS Config provides a built-in "acm-certificate-expiration-check" managed rule that you can use. No need to create manual


### Usecases (2) (Stephan Markel Course)
- You can schedule a cron job that runs every hour

- Event Pattern: Service to service communication
    IAM user sign in -> SNS topic with Email notficaiton
    Event rules to react service doing something

- Trigger Lambda functions

- You can have EC2 instance start event, and you trigger a event bridge rule, which triggers some other AWS service

- Codebuild failed event, you can attach event bridge rule which triggers SNS to send notification

- Cloud trail: Intercept any api call

