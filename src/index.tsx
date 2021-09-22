import React from 'react';
import ReactDOM from 'react-dom';
import MovieCollecter from './logic/MovieCollecter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MovieCollecter key="index"/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
