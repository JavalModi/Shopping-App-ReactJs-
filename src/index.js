import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound, index } from "./pages"
import { Navbar } from './components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
      <Provider store={store}>
 <Auth0Provider
          domain="dev-5g56lez6j6g5v6l7.us.auth0.com"
          clientId="4ZEeMY08C84LFhYg9ebrne5zFEBAMkqh"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>
       

        </Provider>
  </>
);

// export default index;