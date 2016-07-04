FROM mhart/alpine-node:latest 
RUN npm install -g s3rver@1.0.2
EXPOSE 5000
CMD [ "s3rver", "--hostname", "0.0.0.0", "--port", "5000", "--directory", "/tmp" ]
