import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import TeamFight from './pages/TeamFight';
import TeamsList from './pages/TeamsList';
import ShowTeam from './pages/ShowTeam';
import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Hind Siliguri', sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/team/create" render={() => <CreateTeam />} />
        <Route exact path="/fight" render={() => <TeamFight />} />
        <Route
          exact
          path="/team/:id"
          render={(routeProps) => <ShowTeam {...routeProps} />}
        />
        <Route exact path="/list" render={() => <TeamsList />} />
      </Switch>
    </AppContainer>
  );
}

export default App;
