FROM mhart/alpine-node:latest
RUN apk add --no-cache git
RUN npm install -g allanlegalstart/s3rver#pour_toi_public
RUN npm install aws-sdk
WORKDIR /
COPY launch_server.sh /launch_server.sh
COPY CORS.xml /CORS.xml
EXPOSE 5000
CMD [ "sh", "launch_server.sh" ]
