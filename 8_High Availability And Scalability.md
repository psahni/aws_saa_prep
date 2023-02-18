## Vertical Scalability
* Increasing the hardware limit
* Using t2.large instance
* Means increasing the size of the instance
* Junior Operator vs Sr. Operator (call center example)
* Big databse systems
* Scale Up and Scale down

----------------------------------------
## Horizontal Scalability
* Increasing the num of instances
* Very common in modern web applications
* Autoscaling. Load balancer
----------------------------------------

### High Av means running the instances in the multiple Availability zones or data centers.

### Load Balancer
<img width="855" alt="image" src="https://user-images.githubusercontent.com/84832/217798903-7bf767b8-5c20-4bf8-aeb1-db3fca6bdc4d.png">


* Application Load Balancer
* Network Load Balancer
* Gateway load balancer


### Application Load Balancer
  * When you create ALB, you create target groups, of EC2 instances, and link the target group with ALB
  * If one of the EC2 in the target group goes down, ALB will only redirect to one that is UP
  * Edit Inbound security group rules of HTTP SG to allow traffic only from load balancer, for this, 
    assign the SG of load balancer to the HTTP security group.
    
### Network Load Balancer
<img width="935" alt="image" src="https://user-images.githubusercontent.com/84832/219869728-48d682cf-fba3-4711-b0ef-010fb408031e.png">

