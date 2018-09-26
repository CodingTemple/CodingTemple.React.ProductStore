import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";


class App extends Component {
  
  render() {
    // console.log(products)
    return (
      <div>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
