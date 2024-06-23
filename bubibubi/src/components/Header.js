import React from 'react';
import './Header.css';


const Header = () => {
  const handleLogin = () => {
    const clientId = '416ef0ec'; 
    const redirectUri = 'http://localhost:3000/oauth/callback'; 
    const authorizationEndpoint = 'http://localhost:3000/'; 
    const authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <header className="header">
      <h1>부비부비</h1>
      <button onClick={handleLogin} className="login-link" role="link">
        로그인
      </button>
    </header>
  );
};

export default Header; 

