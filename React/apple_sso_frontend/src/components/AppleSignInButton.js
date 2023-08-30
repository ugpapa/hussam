import React, { useEffect } from 'react';

function AppleSignInButton() {
  useEffect(() => {
    // Load the Apple script
    const script = document.createElement('script');
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    script.onload = () => {
      // Initialize AppleID auth once the script is loaded
      if (window.AppleID) {
        window.AppleID.auth.init({
          clientId: 'com.adler3d.adler',
          scope: 'email name',
          redirectURI: 'https://91f7-39-41-94-105.ngrok.io/redirect',
          state: '[STATE]',
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup: remove script if component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div>
      <div 
        id="appleid-signin" 
        className="signin-button" 
        data-color="black" 
        data-border="true" 
        data-type="sign-in"
        data-width="210"  // Set width
        data-height="40"  // Set height
      >
      </div>
    </div>
  );
}

export default AppleSignInButton;
