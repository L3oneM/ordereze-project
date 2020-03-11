import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import CreatePage from './pages/CreatePage/CreatePage';
import EditPage from './pages/EditPage/EditPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/newPage' component={CreatePage} />
        <Route exact path='/editPage' component={EditPage} />
      </Switch>
    </div>
  );
};

export default App;
