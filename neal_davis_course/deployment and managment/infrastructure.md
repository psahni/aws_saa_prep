Cloud Formation
    Template file
        Json/Yaml
    Define entire app stack in template

    When u upload changed template, it will show you the changes (Change Set)

Elastic BeanStack
    Elastic Beanstalk is a service for deploying and scaling web applications and services. Upload your code and Elastic Beanstalk automatically handles the deployment—from capacity provisioning, load balancing, and auto scaling to application health monitoring.


    With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.


    Elastic Beanstalk supports applications developed in Go, Java, .NET, Node.js, PHP, Python, and Ruby. When you deploy your application, Elastic Beanstalk builds the selected supported platform version and provisions one or more AWS resources, such as Amazon EC2 instances, to run your application.


SSM

AWS Config
    Audit and Evaluation
    To identify non complaint resources and remediate them (optional)

AWS Secret Manager
    Rotate Secrets (automatic)
    
    Supports
        RDS, REdshift


AWS Ops Work
    Chef / Puppet

AWS Resource Access Manager
    Share resources across accounts within OU
    You can share a subnet

Disaster Recovery

    https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/

    https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/


### AWS Secret Manager

* How to ensure that sensitive configuration data and credentials, such as database passwords and API keys, are stored securely and encrypted within the Amazon EKS cluster's etcd key-value store.

==> By using AWS Secret Manager with a new AWS KMS key
This integration ensures that sensitive data is encrypted at rest and accessible only to authorized users or applications. By using AWS Secret Manager and a new AWS KMS key, you can ensure that your EKS cluster's etcd key-value store is secure and your sensitive data is protected.