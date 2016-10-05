FROM mhart/alpine-node:latest 
RUN npm install s3rver@1.0.2 aws-sdk fs-extra util
COPY fake_s3.js fake_s3.js
EXPOSE 5000
ARG BUCKET_NAME
RUN S3_BUCKET_NAME=$BUCKET_NAME node ./fake_s3.js
