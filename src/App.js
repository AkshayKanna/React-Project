import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchByGiphy from './Components/SearchByGiphy';
import NotFound from './Components/NotFound';
import Landing from './Components/Landing';

import { ThemeProvider } from '@material-ui/core/styles';
import newTheme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={newTheme}>
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path="/search" exact component={SearchByGiphy} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider >
  );
}

export default App;
