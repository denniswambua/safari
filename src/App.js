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
store.subscribe(() => {
    var journey = JSON.parse(JSON.stringify(store.getState()));
    delete journey["language"]
    localStorage.setItem("journey", JSON.stringify(journey, null, 2))
})

export default App;
