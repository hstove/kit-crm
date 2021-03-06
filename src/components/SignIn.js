import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import KitLogo from '../assets/icon-logo.png';
import BlockstackLogo from '../assets/blockstack-logo-landscape@2x.png';
import DefaultButton from './styles/DefaultButton';
import LearnMore from './LearnMore';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
    background-size: 28px 28px;
  }
`;
export default class SignIn extends Component {
  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="landing">
        <div className="mt3">
          <Link to="/updates" className="f5 fw7 black no-underline dim">
            📰 Updates
          </Link>
        </div>
        <div className="mb4 pt4">
          <img src={KitLogo} alt="Kit Logo" />
          <h1 className="f1 mb0">Keep In Touch</h1>
          <h2 className="mt0 f4">Cultivate stronger relationships</h2>
        </div>
        <p>
          <DefaultButton
            className="f6 ph3 pv2 mb2 dib white bg-black b--black pointer"
            id="signin-button"
            onClick={handleSignIn.bind(this)}
            primary
          >
            Start Now
          </DefaultButton>
        </p>
        <LearnMore />
        <GlobalStyle />
      </div>
    );
  }
}
