FROM mhart/alpine-node:latest
RUN apk add --no-cache git
RUN npm install -g allanlegalstart/s3rver#pour_toi_public
RUN npm install aws-sdk
WORKDIR /
COPY CORS.xml /CORS.xml
EXPOSE 5000
CMD s3rver -a 0.0.0.0 --port 5000 --directory /tmp --configure-bucket "$S3_BUCKET_NAME" /CORS.xml
