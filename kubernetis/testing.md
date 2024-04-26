### Self hosted k8s

• The self-hosted option also requires the maximum resources, in terms of people,
skills, engineering time, maintenance, and troubleshooting. Just setting up a working
Kubernetes cluster is pretty simple, but that’s a long way from a cluster that’s ready for
production. You need to consider at least the following questions:
• Is the control plane highly available? That is, if a master node goes down or
becomes unresponsive, does your cluster still work? Can you still deploy or
update apps? Will your running applications still be fault-tolerant without the
control plane? (See “High Availability” on page 35.)
• Is your pool of worker nodes highly available? That is, if an outage should take
down several worker nodes, or even a whole cloud availability zone, will your
workloads stop running? Will your cluster keep working? Will it be able to automatically
provision new nodes to heal itself, or will it require manual intervention?
• Is your cluster set up securely? Do its internal components communicate using
TLS encryption and trusted certificates? Do users and applications have minimal
rights and permissions for cluster operations? Are container security defaults set
properly? Do nodes have unnecessary access to control plane components?
Is access to the underlying database properly controlled and authenticated?

• Are all services in your cluster secure? If they’re accessible from the internet, are
they properly authenticated and authorized? Is access to the cluster API strictly
limited?
• Is your cluster conformant? Does it meet the standards for Kubernetes clusters
defined by the Cloud Native Computing Foundation? (See “Conformance Checking”
on page 102 for details.)
• Are your cluster nodes fully config-managed, rather than being set up by imperative
shell scripts and then left alone? The operating system and kernel on each
node needs to be updated, have security patches applied, and so on.
• Is the data in your cluster properly backed up, including any persistent storage?
What is your restore process? How often do you test restores?
• Once you have a working cluster, how do you maintain it over time? How do you
provision new nodes? Roll out config changes to existing nodes? Roll out Kubernetes
updates? Scale in response to demand? Enforce policies?

----------------------------------------------------------------------------------------

### Resilience Testing

• You’ll need to have monitoring in place to make sure the cluster nodes and all the
Kubernetes components are working properly, and an alerting system so that staff can
be paged to deal with any problems, day or night.

* Automated resilience testing tools such as Netflix’s Chaos Monkey can help with this,
by randomly killing nodes, Pods, or network connections every so often. Depending
on the reliability of your cloud provider, you may find that Chaos Monkey is unnecessary,
as regular real-world failures will also test the resilience of your cluster and the
services running on it.

### Tradeoff

• Given a limited budget and number of staff available for IT operations,
what proportion of your resources do you want to spend on
administering Kubernetes itself? Would those resources be better
used to support your business’s workloads instead? Can you operate
Kubernetes more cost-effectively with your own staff, or by
using a managed service?

• In our experience, and that of many of the people we interviewed
for this book, a managed service is the best way to run Kubernetes,
period.

### Imp Point
However, we think the basic point stands: it’s not worth managing Kubernetes clus
ters yourself if a service provider can do it better and cheaper.

<img width="438" alt="image" src="https://github.com/psahni/aws_saa_prep/assets/84832/11a28bdc-869f-4f93-87d3-a9811f66d437">

