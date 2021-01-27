import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CadenceCoachPage,
  DidDoDonePage,
  DidDoDonePrivacy,
  HomePage,
  NogPage,
  NoRoutePage,
  TeamTimerPage,
  TeamTimerBasicPrivacy,
  TeamTimerProPrivacy,
  TheBigBoardPage,
} from './pages';
import { ScrollProvider, ViewportProvider } from './contexts';

function App() {
  return (
    <ViewportProvider>
      <ScrollProvider>
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
            <Route path="/projects/did-do-done-privacy">
              <DidDoDonePrivacy />
            </Route>
            <Route path="/projects/team-timer-basic-privacy">
              <TeamTimerBasicPrivacy />
            </Route>
            <Route path="/projects/team-timer-pro-privacy">
              <TeamTimerProPrivacy />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*">
              <NoRoutePage />
            </Route>
          </Switch>
        </Router>
      </ScrollProvider>
    </ViewportProvider>
  );
}

export default App;
