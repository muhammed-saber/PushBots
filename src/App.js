import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Search from './components/login/Search';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions';

import store from './store'

class App extends Component {
  render() {
    return (
       <MuiThemeProvider>
       <div>
       <Route  path="/" exact component={Search} />
       
       <Route exact  path="/navbar" component={NavBar} />
       
      


       </div>
     </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  apps: state.posts.apps
});

export default connect(mapStateToProps, { fetchPosts })(App);
