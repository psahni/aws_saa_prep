### RDS Manual Snapshots:

User-initiated: You manually create these snapshots at any point in time using the AWS Management Console, CLI, or SDK.

Point-in-time capture: They capture the state of your database at the specific moment the snapshot is created.

Retention control: You have complete control over how long to retain these snapshots. They persist indefinitely unless you explicitly delete them.

Sharing: They can be shared with other AWS accounts for collaboration or migration purposes.

### RDS Automated Backups:

Automatic creation: AWS automatically creates backups of your database instance at designated intervals within a daily backup window.

Continuous protection: They provide a continuous rollback option to a recent state of your database.

Retention period: You can configure a retention period for these backups, ranging from 1 to 35 days. After this period, they are automatically deleted by AWS.

Sharing limitations: By default, automated backups cannot be directly shared with other accounts. You would need to first restore them to a new instance and then share that instance.

### Behavior upon RDS Instance Deletion:

Manual Snapshots: These are not automatically deleted when you delete your RDS instance. They remain in your account and continue to incur storage charges unless you explicitly delete them.

Automated Backups (default): These are deleted by default when you delete the RDS instance. However, there's an option to retain them during instance deletion. You can configure this option while deleting the instance, and the backups will be retained for the remaining period of their configured retention window.