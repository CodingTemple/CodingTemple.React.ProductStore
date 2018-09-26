import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";

import {products} from "./data/products";


class App extends Component {
  render() {
    console.log(products)
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-3">
            </div>
          </div>
          <Products products={products} />
        </div>
      </div>
    );
  }
}

export default App;
