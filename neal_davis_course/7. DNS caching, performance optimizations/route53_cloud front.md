### Route 53

You can associate a Route 53 hosted Zone with a VPC in another account
    - Authorize the association
    - Create and association the second account


https://s3.us-west-2.amazonaws.com/cloudformation-templates-us-west-2/ELBWithLockedDownAutoScaledInstances.template


When you register a domain with Route 53, we create a hosted zone for you automatically.

When you transfer DNS service for an existing domain to Route 53, you start by creating a hosted zone for the domain. For more information, see Making Amazon Route 53 the DNS service for an existing domain.


** I didn't write much for this chapter.
Revision is recommended through cheet sheets and videos when needed.


----

* Start 3 EC2 istances in 3 regions
* Create App load balancer (Route53)
* In order to make it work like load balance, you have to create a routing policy



https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/cross-region-dns-based-load-balancing-and-failover.html

Alias = Point one domain to any other aws domain (allows top level domains too)
DNS namespace(Zone Apex)

CNAME = Point one domain to any other domain (not the top level domain like example.com)


https://aws.amazon.com/blogs/networking-and-content-delivery/creating-disaster-recovery-mechanisms-using-amazon-route-53/

----

* Route53 is DNS level query

* Routing Policies

----

Route53 Health Checks
* Only for public resources
* Automted DNS failover

You can health check private EC2 instances with the help of cloud watch metric/alarms

---
Failover policy
Active Passive

There is one primary and secondry, health check will determine and route request accordingly

---
### Geolocation Routing

Asia traffic should go to 1.1.1.1
US region traffic should go to 2.2.2.2
Europe traffic should go 3.3.3.3

Allow all traffic to go to 5.5.5.5 but not france, in this case use geolocation

Q. You have a legal requirement that people in any country but France should NOT be able to access your website. Which Route 53 Routing Policy helps you in achieving this?
A. Geolocation


* Geoproximity

Specify the bias value
Shifting the traffic based of user's geolocation
If there is no bias, then user will go to closest location

---

Client side load balancing - Routing policy Multi value

