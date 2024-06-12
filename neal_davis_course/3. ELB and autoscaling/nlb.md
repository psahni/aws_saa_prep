### Provide low latency as well as failover


1. Launch EC2 instances in multi-AZ behind NLB (say 2)

2. Architect whitelist two IP's

3. Use AWS Global Accelerator - Intelligent routing for lowest latency
AWS Global Accelerator uses the vast, congestion-free AWS global network to route TCP and UDP traffic to a healthy application endpoint in the closest AWS Region to the user.
This means it will intelligently route traffic to the closest point of presence (reducing latency). 

* Seamless failover

Seamless failover is ensured as AWS Global Accelerator uses 'anycast IP address' which means the IP does not change when failing over between regions so there are no issues with client caches having incorrect entries that need to expire.

"Static Ip addresses are exposed to users"