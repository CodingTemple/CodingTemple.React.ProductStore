import React, { Component } from "react";
import Navigation from "./Components/Navigation";

// Components


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-3">
            </div>
          </div>
          <div id="products" className="row view-group">
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="http://placehold.it/400x250/000/fff"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pushy pull-right text-center">
                  <div className="btn-group">
                    <button className="btn btn-info" id="list">
                      List View
                    </button>
                    <button className="btn btn-danger" id="grid">
                      Grid View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
