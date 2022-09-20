import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style/main.sass'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
