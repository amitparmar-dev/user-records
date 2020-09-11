import React from 'react';
import ReactDom from 'react-dom'
import App from './component/App'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

ReactDom.render(
        <Provider store={store} >
            <App />
        </Provider>, document.querySelector('#root'));