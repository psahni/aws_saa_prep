### How to track and notify new objects added/deleted to S3 bucket
- Create SQS queue and SNS topic
- Configure S3 event to publish S3:ObjectCreated:* and s3:ObjectRemoved:Delete event types to SQS and SNS

