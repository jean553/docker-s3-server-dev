# dev-s3-server

Docker image with latest version of S3 fake service ( https://github.com/jamhall/s3rver ).

You can set extra  the ``S3RVER_EXTRA_ARGS`` environment variable to set extra arguments.
For example, if you want to use the S3 path-style address, set ``S3RVER_EXTRA_ARGS=--no-vhost-buckets``

## Usage with Vagrant

Build the container

```
vagrant up
```

your s3 developpement server is running on http://127.0.0.1:5000.

The Default Bucket Name is `development_bucket`.

You can change port and bucketName in the VagrantFile, and simply reload your container.

```
vagrant reload
```


If your client only supports signed requests, specify the credentials

```
{
  accessKeyId: "S3RVER",
  secretAccessKey: "S3RVER",
}
```