import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { GoogleAuthProps } from '../interfaces';

const clientId = process.env.REACT_APP_CLIENT_ID;

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
    let auth = window.gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      signIn(auth.currentUser.get().getId());
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

interface stateProps {
  auth: {
    isSignedIn: boolean | null;
    userId: string | number | null;
  };
}
const mapStateToProps = (state: stateProps) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
