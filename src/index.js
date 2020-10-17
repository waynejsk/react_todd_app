import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import CounterApp from './CounterApp';
import TodoApp from './TodoApp/TodoApp';




ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
    <CounterApp />
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);
