import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User side has been connected", socket.id);
  socket.on("disconnect", () => {
    console.log("User side has been disconnected", socket.id);
  });
});

server.listen(5000,()=>{
    console.log('http://localhost:5000');
})









