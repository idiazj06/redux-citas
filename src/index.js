import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Container/Main';

/* Estilos */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Style/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);