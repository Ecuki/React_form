import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    text: "",
    isDog: true,
    number: "0"
  };
  handleChange = e => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  render() {
    return (
      <>
        <label>
          Podaj imię
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Napisz cośo sobie:
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Masz psa?
          <input
            name="isDog"
            type="checkbox"
            checked={this.state.isDog}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile masz zwierzaków?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">Więcej</option>
          </select>
        </label>
      </>
    );
  }
}

export default App;
