import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/search">
          Search
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
