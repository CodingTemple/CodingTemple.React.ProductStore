import React, {Component} from 'react';
import Products from "../Products";

import { products } from "../../data/products";

export default class Home extends Component {
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
      products: state.products.filter(product => product !== toRemove)
    }))
  }
  render() {
    return(
      <div className="row">
        <div className="col-lg-12 my-3">
          <Products products={this.state.products} onRemoveProduct={this.removeProduct} />
        </div>
      </div>
    );
  }
}