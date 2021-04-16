import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        App Placeholder
      </div>
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
