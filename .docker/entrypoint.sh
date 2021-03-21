# start mongodb
mongod --fork -f /etc/mongod.conf

# seed mongodb
mongo /app/.docker/init.js

# start the node app
npm start