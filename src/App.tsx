import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import ShowTeam from './pages/ShowTeam';
import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Hind Siliguri', sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #17135d;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/team/create" render={() => <CreateTeam />} />
        <Route exact path="/team/show" render={() => <ShowTeam />} />
      </Switch>
    </AppContainer>
  );
}

export default App;
