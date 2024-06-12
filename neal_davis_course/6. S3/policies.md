### IAM Policies
- users and roles (identity based)
- Create policy, apply to group and add user to the group

### Bucket Policies
- Resource based

### S3 Access Control List
    - Least preferred
    - can be applied at object level too

### Which Policy to choose?
    * If you only want to maintain the permissions at AWS servics level then use IAM role
    * If you have very few buckets and have more control, then bucket policy is preffered
    * I would prefer S3 bucket policy, as it gives a visibilty at bucket level, and you don't
      want to maintain too many IAM roles


### HOL by Author

- Create IAM policy for S3, allow Get, Put and Deny Delete
- Create IAM User, apply inline policy to user
- Create S3 bucket policy, Allow Get, Put, Delete

    End result, explicit Deny will override explicit allow. So user will not be able to delete the object in bucket. If there is no Deny in IAM role, then he will be able to delete it.

### S3 versioning and lifecycle
    - When you have multiple versions of the same object in the bucket
    - Helps in accidental deletion

    Replication is allowed when versioning is enabled.
    You can do replication within or cross region
    Also across accounts

    Only the S3 bucket owner can permanently delete objects once versioning is enabled.


### Multi-factor authentication

    Multi-factor authentication (MFA) delete can be enabled.
    MFA delete can also be applied to changing versioning settings.

    MFA delete applies to:
        Changing the bucket’s versioning state. 
        Permanently deleting an object.

### SNS Notification and S3 Bucket
    - Create SNS Notification
    - Apply Policy (Subscription)

    Go to properties of bucket and attach SNS topic
    SO when you upload to bucket, an email will be delievered

### Multipart upload
    - Upload objects in parts indepedently, in parallel and in any order
    - recommended for >=100
    - Must be used for >= 5 Gb

### Trasfer Acceleration 
    - Use cloud front edge locations for transfers, from there it traverses to global network
    - Aws charges you only when transfer acceleration improves in performance