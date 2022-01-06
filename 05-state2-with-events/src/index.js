import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App number={10} />
  </React.StrictMode>,
  document.getElementById('root')
);