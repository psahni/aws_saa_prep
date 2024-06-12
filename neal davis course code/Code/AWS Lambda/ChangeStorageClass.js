// https://freedium.cfd/https://awstip.com/how-to-update-the-storage-class-of-an-object-in-aws-s3-using-node-js-594c1334f253


const { S3Client, CopyObjectCommand } = require('@aws-sdk/client-s3');

async function changeStorageClass(bucketName, objectKey, storageClass) {
    const client = new S3Client({ region: "eu-west-1" });

    try {
        await client.send(new CopyObjectCommand({
            Bucket: bucketName,
            CopySource: `${bucketName}/${objectKey}`,
            Key: objectKey,
            StorageClass: storageClass,
            MetadataDirective: 'COPY' // Preserve the existing metadata
        }));
        console.log(`Storage class updated for ${objectKey} to ${storageClass}`);
    } catch (err) {
        console.error("Error", err);
        throw err;
    }
}

module.exports = {
    changeStorageClass
}

// The `changeStorageClass` function in the provided code is an asynchronous JavaScript function 
// designed to change the storage class of an object in an Amazon Web Services (AWS) Simple Storage Service (S3) bucket. 
// It uses the AWS SDK for JavaScript v3 (`@aws-sdk/client-s3`).