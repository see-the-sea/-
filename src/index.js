import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// import TodoList from './Todo/TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <App />
        {/* <TodoList />s */}
    </div>,
    document.getElementById('root'));
serviceWorker.unregister();