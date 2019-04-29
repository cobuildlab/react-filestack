import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
//main
import HomeView from './HomeView';
import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  render() {
    return (
      <>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
