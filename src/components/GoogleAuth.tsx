import React, { useEffect, useState } from 'react';
import { clientId } from '../config';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

interface GoogleAuthProps {
  isSignedIn: boolean | null;
  signIn: Function;
  signOut: Function;
}

function GoogleAuth({ isSignedIn, signIn, signOut }: GoogleAuthProps) {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      signIn();
    } else {
      signOut();
    }
  };

  const handleSignInButton = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutButton = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button onClick={handleSignOutButton} className="ui red button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button onClick={handleSignInButton} className="ui red button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

const mapStateToProps = (state: { auth: { isSignedIn: boolean | null } }) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
