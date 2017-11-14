import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root';

import configureStore from './frontend/store/store';
import { receiveTodos } from './frontend/actions/todo_actions.js';
import { receiveTodo } from './frontend/actions/todo_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root store={store}/>, root);
});
