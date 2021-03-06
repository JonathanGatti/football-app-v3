import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import TeamFight from './pages/TeamFight';
import TeamsList from './pages/TeamsList';
import ShowTeam from './pages/ShowTeam';
import Header from './components/Header';
import EditTeam from './pages/EditTeam';
import { AppContainer } from './styles/styledComponents';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/create" render={() => <CreateTeam />} />
          <Route exact path="/fight" render={() => <TeamFight />} />
          <Route
            exact
            path="/team/:id"
            render={(routeProps) => <ShowTeam {...routeProps} />}
          />
          <Route exact path="/list" render={() => <TeamsList />} />
          <Route
            exact
            path="/edit/:id"
            render={(routeProps) => <EditTeam {...routeProps} />}
          />
        </Switch>
      </AppContainer>
    </>
  );
}

export default App;
