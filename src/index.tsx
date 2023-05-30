import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

import reducer from './reducers';

import Game from './containers/Game/Game';
import reportWebVitals from './reportWebVitals';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
