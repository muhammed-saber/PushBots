import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 class EndpointResults extends Component {
 /*    renderData() {
         return this.props.data.map(app => {
             return (
                 <h1>Hello</h1>
             )
         })
     }*/
  render() {
     const {apps} = this.props;
     
    return (
      <div>
      <React.Fragment>
      <Grid item xs={4} spacing={24}>
      <Card className="card">
        <CardContent>
          <Typography className="title" color="textSecondary">
           {apps.data.apps.data[1].title}
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">{apps.data.pushes[1]}</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4} spacing={24}>
      <Card className="card">
        <CardContent>
          <Typography className="title" color="textSecondary">
          {apps.data.apps.data[2].title}
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">{apps.data.pushes[2]}</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4} spacing={24}>
      <Card className="card">
        <CardContent>
          <Typography className="title" color="textSecondary">
          {apps.data.apps.data[3].title}
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">{apps.data.pushes[0]}</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4} spacing={24}>
      <Card className="card">
        <CardContent>
          <Typography className="title" color="textSecondary">
          {apps.data.apps.data[4].title}
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">{apps.data.pushes[4]}</Button>
        </CardActions>
      </Card>
      </Grid>
    </React.Fragment>   
       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apps: state.posts.apps
});

export default connect(mapStateToProps)(EndpointResults);














