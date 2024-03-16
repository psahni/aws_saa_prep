### Pre requisites when routing traffic from Route 53 to Aws S3 bucket

- An S3 bucket that is configured to host a static website. The bucket must have the same name as your domain or subdomain. For example, if you want to use the subdomain portal.tutorialsdojo.com, the name of the bucket must be portal.tutorialsdojo.com.

- A registered domain name. You can use Route 53 as your domain registrar, or you can use a different registrar.

The Cross-Origin Resource Sharing (CORS) option should be enabled in the S3 bucket is incorrect because you only need to enable Cross-Origin Resource Sharing (CORS) when your client web application on one domain interacts with the resources in a different domain.

