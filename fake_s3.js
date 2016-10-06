/**
 * @see https://github.com/jamhall/s3rver/blob/master/test/test.js
 */

'use strict';

var AWS = require('aws-sdk');
var fs = require('fs-extra');
var S3rver = require('s3rver');
var util = require('util');

var bucket_name = process.env.S3_BUCKET_NAME;

var s3rver = new S3rver(
    {
        port : '5000',
        hostname : 'localhost',
        silent : false,
        indexDocument : '',
        errorDocument : '',
        directory : '/tmp'
    }
)
    .run(
        function (err, hostname, port, directory) {
            if ( err ) {
                return 'Error starting server';
            }

            var config = {
                accessKeyId : '123',
                secretAccessKey : 'abc',
                endpoint : util.format('%s:%d', hostname, port),
                sslEnabled : false,
                s3ForcePathStyle : true
            };

            AWS.config.update(config);
            var s3Client = new AWS.S3();
            s3Client.endpoint = new AWS.Endpoint(config.endpoint);

            /**
             * Remove if exists and recreate the temporary directory
             */
            fs.remove(
                directory,
                function (err) {
                    if ( err ) {
                        return err;
                    }

                    fs.mkdirs(
                        directory,
                        function (err) {
                            if ( err ) {
                                return err;
                            }
                            if ( bucket_name && bucket_name !== '' ) {
                                s3Client.createBucket(
                                    { Bucket : bucket_name }
                                );
                            }
                        }
                    );
                }
            );
        }
    );
