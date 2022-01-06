import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App number={6} name='Felipe' />
  </React.StrictMode>,
  document.getElementById('root')
);