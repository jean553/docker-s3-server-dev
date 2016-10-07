#!/usr/bin/env bash

# Launch the local S3 server
s3rver --hostname 0.0.0.0 --port 5000 --directory /tmp &

# Wait 2 seconds to give the server the time to be up
sleep 2

# Create the bucket if a S3_BUCKET_NAME if specified in the environment
node create_bucket.js

# Block the process as long as the server is alive
wait
