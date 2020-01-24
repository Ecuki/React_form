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
      {props.title} {cash}
    </div>
  );
};

class App extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.86,
    ratioEuro: 4.26
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.86,
      title: "Wartość w dolarach:"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.26,
      title: "Wartość w euro:"
    },
    {
      id: 3,
      name: "pound",
      ratio: 5.05,
      title: "Wartość w funtach:"
    }
  ];
  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  render() {
    const { amount } = this.state;
    const calculators = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));
    return (
      <div className="app">
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        {calculators}
      </div>
    );
  }
}
export default App;
