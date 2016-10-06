FROM mhart/alpine-node:latest 
RUN npm install s3rver@1.0.2 aws-sdk fs-extra util
COPY fake_s3.js fake_s3.js
EXPOSE 5000
CMD ["node", "./fake_s3.js"]
