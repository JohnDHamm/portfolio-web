import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CadenceCoachPage,
  DidDoDonePage,
  HomePage,
  NogPage,
  TeamTimerPage,
  TheBigBoardPage,
} from './pages';
import { ViewportProvider } from './contexts';

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Switch>
          <Route path="/projects/teamtimer">
            <TeamTimerPage />
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
    </ViewportProvider>
  );
}

export default App;
