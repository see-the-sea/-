import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import TodoList from './Todo/TodoList';
import List from './Store/TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        {/* <App /> */}
        {/* <TodoList /> */}
        <List />
    </div>,
    document.getElementById('root'));
serviceWorker.unregister();