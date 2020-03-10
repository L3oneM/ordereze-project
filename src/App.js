import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getAll } from './services/pages';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import CreatePage from './pages/CreatePage/CreatePage';

const App = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getAll().then(pages => {
      setPages(pages);
    });
  }, []);

  console.log(pages);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <MainPage pages={pages} />} />
        <Route exact path='/newPage' component={CreatePage} />
      </Switch>
    </div>
  );
};

export default App;
