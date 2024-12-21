import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages';
import Header from './components';
import Footer from './components';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* Add more routes here as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;