import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateTeam from './components/CreateTeam';
import ShowTeam from './components/ShowTeam';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/team/create" render={() => <CreateTeam />} />
        <Route exact path="/team/show" render={() => <ShowTeam />} />
      </Switch>
    </div>
  );
}

export default App;
