import React, { Component } from 'react';
import logo from './img/coffeeshopsquare.png';
import github from './img/github-icon.svg';
import linkedin from './img/linkedin-icon.svg';
import twitter from './img/twitter-icon.svg';
import email from './img/email-icon.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="about-container">
          <p>
            Full-stack software engineer & web developer. Teams are better than individuals. Learning is better than
            knowing. Done is better than perfect. Simple is better than complex.
          </p>
          <p>
            Previously, I attained a B.S. in Wood Products Engineering from SUNY ESF at Syracuse. I worked in the lumber
            and building materials industry from 2007 to 2016. I co-owned and operated a hot sauce business from 2012 to
            2015.
          </p>
          <div>
            <a className="App-link" href="https://github.com/stahlscott" target="_blank" rel="noopener noreferrer">
              <img src={github} className="icon" alt="github" />
            </a>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/stahlscott/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="icon" alt="linkedin" />
            </a>
            <a className="App-link" href="https://twitter.com/stahlish" target="_blank" rel="noopener noreferrer">
              <img src={twitter} className="icon" alt="twitter" />
            </a>
            <a className="App-link" href="https://github.com/stahlscott" target="_blank" rel="noopener noreferrer">
              <img src={email} className="icon" alt="email" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
