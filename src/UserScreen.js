import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import Login from './Login';

class Register extends Component {

	  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      email:'',
      password:''
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }

  render() {
    // console.log("props",this.props);
    var userhintText,userLabel;
    if(this.props.role === "user"){
      userhintText="Enter your user name";
      userLabel="User name";
    }
    else{
      userhintText="Enter your admin user name";
      userLabel="Admin user name";
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="User Page"
           />
          User Page
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;