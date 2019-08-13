#!/usr/bin/env bash

# Launch the local S3 server
s3rver -a 0.0.0.0 --port 5000 --directory /tmp --configure-bucket "$S3_BUCKET_NAME" ./CORS.xml
