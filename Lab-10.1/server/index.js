const moment = require("moment/moment");
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*" },
});

const port = process.env.PORT || 3000;
const users = {};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("name", (name) => {
    users[socket.id] = name;
  });

  socket.on("message", (message) => {
    console.log(message);
    var time = moment().format("h:mm a");
    io.emit("message", `${users[socket.id]} said ${message} on ${time}`);
  });

  /*socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });*/

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));
