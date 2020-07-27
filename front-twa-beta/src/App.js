import React from 'react';
import logo from './T_LOGO_GREY_2.png';
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  } 

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {//this will have to be replaced with a horizontal menu
          }
          <div className="App-menu-wrapper">
            <div className="menu-button">
              <a
                className="App-link"
                href="localhost:3000/buyer"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUYERS
              </a>
            </div>
            <div className="menu-button">
              <a
                className="App-link"
                href="localhost:3000/seller"
                target="_blank"
                rel="noopener noreferrer"
              >
                SELLERS
              </a>
            </div>
            <div className="menu-button">
              <a
                className="App-link"
                href="localhost:3000/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACT
              </a>
            </div>
          </div>
        </header>
        <div className="pitch-wrapper">
          <p>
          At Trade With Africa, we value reliability and efficiency. </p>
          <p>
          We provide a digital platform to ensure the <span className="bold">right people</span> connect at the <span className="bold">right time </span> and trade at the <span className="bold">right price</span> for everyone.
          </p>
          <p>
          We guarantee that you will receive payment for what you sell within one day of it being delivered.  We connect you with nearby buyers so that you can sell your high-quality products on the market as fast as possible, and at the price that is right for you.
          </p>
          <p>
          Sign up for our beta below! 
          </p>
        </div>

        <div className="signup-button-wrapper">
          <Button>TRADE NOW</Button>
        </div>
        
        <p className="App-intro">Developer's note: {this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
