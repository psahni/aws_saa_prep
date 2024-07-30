### IAM roles AND ECS

* ECS tasks have IAM tasks, which enable an ecs task to call aws servives api

* You can associate an IAM role with an Amazon ECS task definition.

* You can specify a task IAM role in your task definitions, or you can use a "taskRoleArn" override when running a task manually with the RunTask API operation. 

*  The Amazon ECS agent receives a payload message for starting the task with additional fields that contain the role credentials. 

*  Instead of creating and distributing your AWS credentials to the containers or using the Amazon EC2 instance’s role, you can associate an IAM role with an Amazon ECS task definition or RunTask API operation.


https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html

* Amazon ECS task IAM role (for application code to access aws service like S3)
* Amazon ECS task execution IAM role (For AWS api calls like pulling container image)
