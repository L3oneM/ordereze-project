import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import CreatePage from './pages/CreatePage/CreatePage';
import EditPage from './pages/EditPage/EditPage';
import SideBar from './components/SideBar/SideBar';
import Notification from './components/Notification/Notification';

import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <Notification />
      <Header />
      <div className='main-content'>
        <SideBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/newPage' component={CreatePage} />
          <Route exact path='/editPage' component={EditPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
