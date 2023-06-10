* Amazon CloudFront supports dynamic content from HTTP and WebSocket protocols, which are based on the Transmission Control Protocol (TCP) protocol. 
Common use cases include dynamic API calls, web pages and web applications, as well as an application's static files such as audio and images. It also supports on-demand media streaming over HTTP.


* AWS Global Accelerator supports both User Datagram Protocol (UDP) and TCP-based protocols. 
It is commonly used for non-HTTP use cases, such as gaming, IoT and voice over IP. 
It is also good for HTTP use cases that need static IP addresses or fast regional failover.


* Amazon CloudFront supports content caching at edge locations based on configurable patterns, such as URLs, headers and file types. 
Content that is cached and compressed at edge locations improves latency significantly and offloads traffic from backend systems. 
This makes applications more scalable.

* However, for backends that only deliver dynamic content or non-TCP protocols, Global Accelerator is likely the best choice. 
It doesn't cache any content. It uses edge computing to find the most optimal route to the closest regional endpoint, which is why it 
works well for gaming and IoT, and mitigate endpoint failure.

* AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. 

* CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and
dynamic site delivery).

* Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge 
to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), 
or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. 
Both services integrate with AWS Shield for DDoS protection.

#### Questions

* You have a CloudFront Distribution that serves your website hosted on a fleet of EC2 instances behind an Application Load Balancer. All your clients are from the United States, but you found that some malicious requests are coming from other countries. What should you do to only allow users from the US and block other countries?
   - Use Cloud Front Geo Location

* You have a static website hosted on an S3 bucket. You have created a CloudFront Distribution that points to your S3 bucket to better serve your requests and improve performance. After a while, you noticed that users can still access your website directly from the S3 bucket. You want to enforce users to access the website only through CloudFront. How would you achieve that?
    - Configure your CloudFront Distribution and create an Origin Access Control (OAC), then update your S3 Bucket Policy to only accept requests from your CloudFront   Distribution.

```
{

    "Version": "2012-10-17",
    "Id": "Mystery policy",
    "Statement": [{
        "Sid": "What could it be?",
        "Effect": "Allow",
        "Principal": {
           "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::examplebucket/*",
        "Condition": {
            "StringEquals": {
                "AWS:SourceArn": "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE"
            }
        }
    }]
}
```

* Above config allows s3 bucket content to be accessed only from cloud front distribution

* Cloud Front Price Classes allows you to decrease costs by targetting only US & Europe
* Which AWS service can help you to assign a static IP address and provide low latency across the globe? - AWS Global Accelerator + Application Load Balancer



