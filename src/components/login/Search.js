import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { fetchPosts } from '../../actions/postActions';


class Search extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  } 
  

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () => {
  this.props.login(this.state).then(
    
    (res) => this.props.history.push('/navbar'),
    (err) => this.setState({ errors: err.response.data.errors }),
    
    this.props.fetchPosts() 

  );
 
  }
  render() {
    
    return <form>
      <TextField
        label='Email'
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin='normal'
        fullWidth
      />
      <br />
      <TextField
        label='Password'
        value={this.state.passwword}
        onChange={this.handleChange('password')}
        margin='normal'
        fullWidth
      />
  
      <Button
        color='primary'
        variant='raised'
        onClick={this.handleSubmit}
      >
         Create
               </Button>
    </form>
  }
}
Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login, fetchPosts})(Search);
