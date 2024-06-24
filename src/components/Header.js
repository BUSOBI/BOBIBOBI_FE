import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const clientId = '416ef0ec'; 
  const redirectUri = encodeURIComponent('https://auth.bssm.app/oauth?clientId=416ef0ec&redirectURI=http://localhost:3000/');
  const authorizationEndpoint = 'http://localhost:8088/oauth/authorize'; 
  const tokenEndpoint = 'http://localhost:8088/oauth/token'; 

  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = () => {
    const authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = authUrl;
  };

  const handleTokenExchange = (code) => {
    const data = {
      client_id: clientId,
      redirect_uri: 'http://localhost:3000/oauth/callback',
      code,
      grant_type: 'authorization_code'
    };

    fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      setAccessToken(data.access_token);
    })
    .catch(error => {
      console.error('Error exchanging code for token:', error);
    });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      handleTokenExchange(code);
      window.history.replaceState({}, document.title, '/');
    }
  }, []);

  const handleLogout = () => {
    setAccessToken(null);
  };

  return (
    <header className="header">
      <h1>부비부비</h1>
      {!accessToken ? (
        <button onClick={handleLogin} className="login-button">
          로그인
        </button>
      ) : (
        <div>
          <p>인증 성공! Access Token: {accessToken}</p>
          <button onClick={handleLogout} className="logout-button">
            로그아웃
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
