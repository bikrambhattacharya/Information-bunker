import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Router/AppRouter';
import configureStore from './store/configureStore';
import { addPost } from './actions/Post';
import 'normalize.css/normalize.css';
import './styles/style.scss';
const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});
const routes = (
    <Provider store={store} >
        <Routes />
    </Provider>
);
ReactDOM.render(routes, document.getElementById('app'))