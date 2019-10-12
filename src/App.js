import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Real Madrid",
        id: 1
      },
      {
        name: "Barcelona",
        id: 2
      },
      {
        name: "Bayern",
        id: 3
      },
      {
        name: "Liverpool",
        id: 4
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Game Scoreboard"
          totalPlayers={this.state.players.length}
        />

        {/* Players list */}
        {this.state.players.map(player => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            remove={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
