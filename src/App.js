import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Cash = props => {
  const cash =
    props.cash === "" || props.cash === "0"
      ? "0"
      : ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {cash}
    </div>
  );
};

class App extends React.Component {
  state = {
    amount: "",
    product: "electricity"
  };
  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "Wartość w polskich złotych:"
      },
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
    ],
    prices: {
      electricity: 0.55,
      gas: 4.95,
      gold: 185,
      silver: 1.3,
      platinum: 5
    }
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  handleSelect = e => {
    this.setState({
      product: e.target.value
    });
  };
  insertSuffix(select) {
    if (select === "electricity") return <em>kWh</em>;
    if (select === "gas") return <em>l</em>;
    if (select === "gold") return <em>g</em>;
    if (select === "silver") return <em>g</em>;
    if (select === "platinum") return <em>g</em>;
  }
  selectPrice(select) {
    const price = this.props.prices[select];
    console.log(price);
    return price;
  }
  render() {
    const { amount } = this.state;
    const calculators = this.props.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={this.selectPrice(this.state.product)}
      />
    ));
    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={this.state.product} onChange={this.handleSelect}>
            <option value="electricity">Prąd</option>
            <option value="gas">Bęzyna</option>
            <option value="gold">Złot</option>
            <option value="silver">Srebro</option>
            <option value="platinum">Platyna</option>
          </select>
          <br />
        </label>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}
export default App;
