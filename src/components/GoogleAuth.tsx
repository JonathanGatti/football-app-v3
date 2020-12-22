import React, { useEffect, useState } from 'react';
import { clientId } from '../config';

function GoogleAuth() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
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
  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button className="ui green google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;
