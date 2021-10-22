import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

/**
 * Instructions
 * run `yarn install` or `npm install` to add all the packages.
 *
 * the extra installs that were made beyond create-react-app are:
 *
 * yarn add @mui/material @emotion/react @emotion/styled
 * yarn add @mui/icons-material
 *
 * Then these links were added in the `<head>` of
 * /public/index.html
 *
 * <link
 *    rel="style"
 *    href="https://fonts.googleapis.com/icon?family=Material+Icons"
 *  />
 *  <link
 *    rel="stylesheet"
 *    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
 *  />
 *
 */
