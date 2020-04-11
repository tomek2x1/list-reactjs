import React, { Component } from "react";
import Button from "./Button";
import Board from "./Board";

class App extends Component {
  state = {
    sex: "all",
  };

  handleUserSex = (option) => {
    this.setState({
      sex: option,
    });
  };

  usersList = (props) => {
    let { users } = this.props.data;
    switch (this.state.sex) {
      case "all":
        return (users = users.map((user) => (
          <Board key={user.id} user={user} />
        )));
      case "female":
        users = users.filter((user) => user.sex === "female");
        return users.map((user) => <Board key={user.id} user={user} />);
      case "male":
        users = users.filter((users) => users.sex === "male");
        return users.map((user) => <Board key={user.id} user={user} />);
      default:
        return "Brak danych";
    }
  };

  render() {
    return (
      <div>
        <Button
          title="Pokaż wszystkich"
          click={this.handleUserSex.bind(this, "all")}
        />
        <Button
          title="Kobiety"
          click={this.handleUserSex.bind(this, "female")}
        />
        <Button
          title="Mężczyźni"
          click={this.handleUserSex.bind(this, "male")}
        />
        {this.usersList()}
      </div>
    );
  }
}

export default App;
