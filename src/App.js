import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { Provider } from 'react-redux'
import { store } from './components/store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </Router>
    </Provider>
  );
}

export default App;
