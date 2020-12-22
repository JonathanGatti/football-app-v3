import React, { useEffect, useState } from 'react';
import { clientId } from '../config';

function GoogleAuth() {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = () => {
    let auth = window.gapi.auth2.getAuthInstance();
    setIsSignedIn(auth.isSignedIn.get());
  };

  const handleSignInButton = (): void => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutButton = (): void => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button onClick={handleSignOutButton} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button onClick={handleSignInButton} className="ui green google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;
