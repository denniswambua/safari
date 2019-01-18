import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Nav from "./Nav";
import store from './store';

const App = () => (
    <Provider store={store}>
        <Nav/>
    </Provider>
);

export default App;
