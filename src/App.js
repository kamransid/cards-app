import React from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Charts from "./Components/Charts";
import Histogram from "./Components/Histogram";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitsCount: 0,
      veggieCount: 0,
      othersCount: 0,
      topPrices: [],
    };
  }

  componentDidMount() {
    fetch("https://my.api.mockaroo.com/orders.json?key=bcc63600")
      .then((response) => response.json())
      .then((data) => {
        let fruitCount = 0;
        let veggieCount = 0;
        let otherCount = 0;
        data.forEach((item) => {
          switch (item["type"]) {
            case "fruit":
              fruitCount++;
              break;
            case "veggie":
              veggieCount++;
              break;
            case "other":
              otherCount++;
          }
        });
        let priceArray = data.map((item) => {
          return item["price"] ? item["price"].replace("USD", "").trim() : null;
        });
        priceArray.sort();
        let topFive = [];
        for (let i = 1; i <= 5; i++) {
          console.log(priceArray[priceArray.length - i]);
          topFive.push(priceArray[priceArray.length - i]);
        }
        this.setState({
          fruitsCount: fruitCount,
          veggieCount: veggieCount,
          othersCount: otherCount,
          topPrices: topFive,
        });
      });
  }
  render() {
    return (
      <>
        <Header />
        <div className="card-container">
          <Cards type="fruit" count={this.state.fruitsCount} />
          <Cards type="veggie" count={this.state.veggieCount} />
          <Cards type="other" count={this.state.othersCount} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Charts />
            </div>
            <div className="col-6">
              <Histogram />
            </div>
          </div>
        </div>

        <hr />
        <Footer />
      </>
    );
  }
}

export default App;
