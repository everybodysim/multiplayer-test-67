import { Room, Client } from "colyseus";

export class RacingRoom extends Room {

  onCreate(options: any) {

    console.log("RacingRoom created", options);

    this.setState({
      players: {}
    });
  }

  onJoin(client: Client, options: any) {

    console.log("join racing:", client.sessionId);

    this.state.players[client.sessionId] = {
      x: 0,
      y: 0,
      z: 0
    };
  }

  onLeave(client: Client) {

    delete this.state.players[client.sessionId];
  }
}
