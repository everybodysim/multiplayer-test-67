import http from "http";
import express from "express";
import { Server } from "colyseus";
import { LobbyRoom } from "./LobbyRoom";
import { RacingRoom } from "./RacingRoom";

const app = express();
const server = http.createServer(app);

const gameServer = new Server({
  server
});

// ✅ REGISTER ROOMS HERE
gameServer.define("lobby", LobbyRoom);
gameServer.define("racing", RacingRoom);

gameServer.listen(2567);

console.log("Colyseus server running on 2567");
