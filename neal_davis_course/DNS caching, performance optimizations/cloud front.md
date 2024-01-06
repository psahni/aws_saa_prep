Amazon CloudFront can be used to cache the files in edge locations around the world and this will improve the performance of the webpages.

To serve a static website hosted on Amazon S3, you can deploy a CloudFront distribution using one of these configurations:

  • Using a REST API endpoint as the origin with access restricted by an origin access identity (OAI)

  • Using a website endpoint as the origin with anonymous (public) access allowed

  • Using a website endpoint as the origin with access restricted by a Referer header


  https://www.udemy.com/course/aws-certified-solutions-architect-associate-hands-on/learn/lecture/28618820#overview

  ---------------------------------------------------------------------------------------

### How a company in USA is expanding to Europe, but the backend must be in USA. How to keep the performance optimized for european users?
  - Use cloud front which can point to on premise server and cache data at edge locations

  - A custom origin can point to an on-premises server and CloudFront is able to cache content for dynamic websites. CloudFront can provide performance optimizations for custom origins even if they are running on on-premises servers. These include persistent TCP connections to the origin, SSL enhancements such as Session tickets and OCSP stapling.

  
### How to setup high availability for two buckets served from diff regions (cross-region replication)
You can set up CloudFront with origin failover for scenarios that require high availability. To get started, you create an origin group with two origins: a primary and a secondary. If the primary origin is unavailable or returns specific HTTP response status codes that indicate a failure, CloudFront automatically switches to the secondary origin.


### A company already using Auto scaling group behind ALB in Multi-AZ. How to handle sudden increase in traffic?

• Amazon Aurora Read Replicas can be used to serve read traffic which offloads requests from the main database.

• On the frontend an Amazon CloudFront distribution can be placed in front of the ALB and this will cache content for better performance and also offloads requests from the backend.