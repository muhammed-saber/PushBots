import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import EndpointResults from '../endpoint_results/EndpointResults';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';



 class NavBar extends Component {
    

/*
 componentWillMount() {
    this.props.fetchPosts()
 
  }
*/





  
  render() {
    
    return (
      
      <div>
     
      <AppBar title="Amr Sobhy" />
    
       {this.props.apps.status}
     
      <EndpointResults apps={this.props.apps}/>
   
      </div>
      
    )
  

  }
 }


 
  
  const mapStateToProps = state => ({
    apps: state.posts.apps
  });
  
  export default connect(mapStateToProps, { fetchPosts })(NavBar);