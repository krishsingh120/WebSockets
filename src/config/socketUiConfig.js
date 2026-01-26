const { instrument } = require("@socket.io/admin-ui");
const {
  SOCKET_AUTH_USERNAME,
  SOCKET_AUTH_PASSWORD,
  NODE_ENV,
} = require("./serverConfig");

const authConfig = {
  type: "basic",
  username: SOCKET_AUTH_USERNAME,
  password: SOCKET_AUTH_PASSWORD,
};

const socketAdminUi = (io) => {
  try {
    instrument(io, {
      auth: false,
      mode: NODE_ENV,
    });
  } catch (error) {
    console.error("Socket Admin Ui error: ", error);
  }
};

module.exports = socketAdminUi;
