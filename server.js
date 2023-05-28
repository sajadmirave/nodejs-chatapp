const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

// middlewares

// set ejs file
app.set("view engine", "ejs");
app.set("views", "views");

// routes
app.get("/", (req, res) => {
  res.render("home", {});
});

// socket
io.on("connection", (socket) => {
  // send name
  socket.on("send name", (username) => {
    socket.emit("send name", username);
  });

  socket.on("send message", (message) => {
    socket.emit("send message", message);
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
