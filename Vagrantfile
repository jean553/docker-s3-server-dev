# -*- mode: ruby -*-
# vi: set ft=ruby ts=2 sw=2 expandtab :

PROJECT = "s3"
PROJECT_DIR = "/vagrant/s3"

Vagrant.configure(2) do |config|


  config.vm.define "s3" do |s3|
    s3.vm.provider "docker" do |d|
      d.image = "jean553/docker-s3-server-dev"
      d.env = {
        "S3_BUCKET_NAME" => "development_bucket",
      }
    end
    s3.vm.network "forwarded_port", guest: 5000, host: 5000
  end
end
