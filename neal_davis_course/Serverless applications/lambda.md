AWS Lambda supports many AWS services as event sources. For more information, see Using AWS Lambda with other services. When you configure these event sources to trigger a Lambda function, the Lambda function is invoked automatically when events occur. You define event source mapping, which is how you identify what events to track and which Lambda function to invoke.

### Lambda Use cases
https://docs.aws.amazon.com/lambda/latest/dg/applications-usecases.html


The first time you invoke your function, AWS Lambda creates an instance of the function and runs its handler method to process the event. When the function returns a response, it stays active and waits to process additional events. If you invoke the function again while the first event is being processed, Lambda initializes another instance, and the function processes the two events concurrently. As more events come in, Lambda routes them to available instances and creates new instances as needed. When the number of requests decreases, Lambda stops unused instances to free up the scaling capacity for other functions.

"Sudden Burst of Traffic" => API Gateway + Lambda