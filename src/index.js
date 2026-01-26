const express = require("express");
const { Server } = require("socket.io");
const path = require("path");
const http = require("http");

const socketAdminUi = require("./config/socketUiConfig");

const app = express();
const PORT = 3000;

// Create HTTP server
const httpServer = http.createServer(app);

// Attach Socket.IO to same server
const io = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

app.use("/", express.static(path.join(__dirname, "../public")));

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Server receive event from client side.
  socket.on("msg_send", (payload) => {
    console.log(payload.msg);

    // Server emit a event for client.
    // io.emit("msg_rcvd", payload);
    // socket.emit("msg_rcvd", payload);
    socket.broadcast.emit("msg_rcvd", payload);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "OK",
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  socketAdminUi(io);
  console.log(`Socket UI -> is listening on https://admin.socket.io`);

});
