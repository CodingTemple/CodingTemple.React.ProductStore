import React, {Component} from 'react';
import Product from '../Product';

export default class Products extends Component {
  render() {
    return(
      <div id="products" className="row view-group">
        {this.props.products.map(product => <Product key={product.id} product={product} />)}
      </div>
    );
  }
} 