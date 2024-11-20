https://stackoverflow.com/questions/48607025/can-i-use-multiple-loadbalancers-in-route53-alias-records

How Route 53 will handle multiple load balancers

The better choice is to use weighted resource records.



An Amazon Load Balancer has more than one IP address. DNS queries will usually return two IP addresses. If you create a single record with more than one entry, it is very likely that only the first IP address of the first load balancer will be used by clients. By using a weighted record, you will be able to balance traffic to the load balancers.




Indeed the second method works best. It is an awkward interface but after messing around a bit I was able to create two Alias records i.e example.sample.com pointing to separate load balancers. 
