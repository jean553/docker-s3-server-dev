# dev-s3-server

Docker image with latest version of S3 fake service ( https://github.com/jamhall/s3rver ).

Create an custom-nammed empty bucket through docker build arguments, e.g. :

```
docker build --build-arg BUCKET_NAME=fake_bucket .
```
