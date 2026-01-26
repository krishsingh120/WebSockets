const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 4900,
  NODE_ENV: process.env.NODE_ENV,
  SOCKET_AUTH_USERNAME: process.env.SOCKET_AUTH_USERNAME,
  SOCKET_AUTH_PASSWORD: process.env.SOCKET_AUTH_PASSWORD,
};
