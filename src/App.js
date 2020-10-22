import React                                            from 'react';
import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
import LandingView                                      from './components/LandingView';
import NotFound404                                      from './components/NotFound404';
import Navigation                                       from './components/Navigation';
import Footer                                           from './components/Footer';

function App() {

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingView} />
        <Route path="*" component={NotFound404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
