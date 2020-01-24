import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Cash = props => {
  const cash =
    props.cash === "" || props.cash === "0"
      ? "0"
      : (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      Warość {cash} {props.title === "dollars" ? "$" : "€"}{" "}
    </div>
  );
};

class App extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.86,
    ratioEuro: 4.26
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;
    return (
      <div className="app">
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        <Cash cash={amount} ratio={ratioDollar} title={"dollars"} />
        <Cash cash={amount} ratio={ratioEuro} title={"euros"} />
      </div>
    );
  }
}
export default App;
