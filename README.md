# dev-s3-server

Docker image with latest version of S3 fake service ( https://github.com/jamhall/s3rver ).

## Usage with Vagrant

Set the bucket name environment variable in your Vagrantfile.

```ruby
config.vm.define "s3" do |s3|
  s3.vm.provider "docker" do |d|
    d.image = "jean553/docker-s3-server-dev"
    d.env = {
      "S3_BUCKET_NAME" => "MyBucketName",
    }
  end
end
```
