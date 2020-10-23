import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CadenceCoachPage,
  DidDoDonePage,
  HomePage,
  NogPage,
  TeamTimerProPage,
  TheBigBoardPage,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects/teamtimerpro">
          <TeamTimerProPage />
        </Route>
        <Route path="/projects/nog">
          <NogPage />
        </Route>
        <Route path="/projects/diddodone">
          <DidDoDonePage />
        </Route>
        <Route path="/projects/cadencecoach">
          <CadenceCoachPage />
        </Route>
        <Route path="/projects/thebigboard">
          <TheBigBoardPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <div>404 no page</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
