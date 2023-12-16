const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");

const PORT = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  //receiver
  socket.on("userJoined", ({ userName, room }, callback) => {
    console.log("fromServer:", { userName, room });
  });

  socket.on("disconnect", () => {
    console.log("user has left");
  });
});

app.use("/", router);

server.listen(PORT, () => console.log(`server running on ${PORT} port`));
