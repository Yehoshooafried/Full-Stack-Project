import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import ClocksApp from './clocks app/ClocksApp';
import Counter from './clocks app/Counter';
import UserApp from './reactProject/UserApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './fileSystemManagment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
