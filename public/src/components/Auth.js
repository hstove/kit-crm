import React, { Component, Link } from 'react';
import Profile from './Profile.js';
import SignIn from './Signin.js';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack';

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }
  }

  handleSignIn(e) {
    e.preventDefault();
    redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          {!isUserSignedIn() ? (
            <SignIn handleSignIn={this.handleSignIn} />
          ) : (
            <Profile handleSignOut={this.handleSignOut} />
          )}
        </div>
      </div>
    );
  }
}
