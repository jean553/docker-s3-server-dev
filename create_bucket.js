// Create a new bucket inside the local s3,
// if a bucket name is specified in the environment

var AWS = require('aws-sdk');

var endpoint = new AWS.Endpoint('http://0.0.0.0:5000');

// Set some dummy credentials
var credentials = new AWS.Credentials(
    {
        accessKeyId : 'dummy_value_cannot_be_none',
        secretAccessKey : 'dummy_value_cannot_be_none'
    }
);
// Create an S3 client
var s3 = new AWS.S3(
    {
        endpoint : endpoint,
        credentials : credentials,
        s3ForcePathStyle: true      // Force client to look for hostname/my_bucket instead of my_bucket.hostname
    }
);

// Get the bucket name from the environment
var bucket_name = process.env.S3_BUCKET_NAME;

if (bucket_name && bucket_name != null)
    s3.createBucket(
        {Bucket : bucket_name},
        function(error, success) {
            if (success && success != null) {
                console.log("Bucket " + bucket_name + " created");
            }
            else {
                console.log("Can't create bucket " + bucket_name + ": " + error.code);
            }
        }
    );