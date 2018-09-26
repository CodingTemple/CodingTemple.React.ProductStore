import React, {Component} from 'react';

export default class Product extends Component {
  render() {
    const product = this.props.product;
    return(
      <div className="item col-xs-4 col-lg-4">
        <div className="thumbnail card">
          <div className="img-event">
            <img
              className="group list-group-image img-fluid"
              src={product.image}
              alt=""
            />
          </div>
          <div className="caption card-body">
            <h4 className="group card-title inner list-group-item-heading">
              {product.name}
                  </h4>
            <p className="group inner list-group-item-text">
              {product.description}
                  </p>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p className="lead">${product.price.toFixed(2)}</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a
                  className="btn btn-success"
                  href=""
                >
                  Add to cart
                      </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pushy pull-right text-center">
          <div className="btn-group">
            <button className="btn btn-info" id="list">Edit</button>
            <button className="btn btn-danger" id="grid" onClick={() => this.props.onRemoveProduct(product)}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}