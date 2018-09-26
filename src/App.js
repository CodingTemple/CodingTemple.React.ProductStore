import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";

import {products} from "./data/products";


class App extends Component {
  constructor() {
    super()
    this.state = {
      products,
    }
    this.removeProduct = this.removeProduct.bind(this)
  }

  removeProduct(toRemove) {
    console.log(toRemove.name);
    this.setState(state => ({
      products: state.products.filter(product => product!==toRemove)
    }))
  }
  render() {
    // console.log(products)
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-3">
            </div>
          </div>
          <Products products={this.state.products} onRemoveProduct={this.removeProduct} />
        </div>
      </div>
    );
  }
}

export default App;
