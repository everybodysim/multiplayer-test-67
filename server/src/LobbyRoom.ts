import { Room, Client } from "colyseus";

export class LobbyRoom extends Room {

  onCreate(options: any) {

    console.log("LobbyRoom created", options);

    this.setState({
      hello: "lobby working"
    });

    this.onMessage("ping", (client) => {
      client.send("pong", { ok: true });
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined lobby");
  }

  onLeave(client: Client) {
    console.log(client.sessionId, "left lobby");
  }
}
