const gunLib = require("gun")

const server = require('http').createServer().listen(8080);

const gun = gunLib({
   web: server
});
