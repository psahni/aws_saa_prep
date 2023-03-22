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

