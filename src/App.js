import React from 'react';
import './App.css';
import Header from './components/Header';
import { Home, Details, Assets } from './pages';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/assets" component={Assets} />
      <Route path="/details" component={Details} />
    </Router>
  );
}

export default App;