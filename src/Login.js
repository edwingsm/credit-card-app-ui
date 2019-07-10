import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import UserScreen from './UserScreen';
class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
         <TextField
           hintText="Please enter your user name"
           floatingLabelText="User Name"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Please enter your password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'user'
    }
  }
  // componentWillMount(){
  // // console.log("willmount prop values",this.props);
  // if(this.props.role != undefined){
  //   if(this.props.role == 'USER'){
  //     console.log("in USER componentWillMount");
  //     var localloginComponent=[];
  //     localloginComponent.push(
  //       <MuiThemeProvider>
  //         <div>
  //          <TextField
  //            hintText="Enter your College Rollno"
  //            floatingLabelText="Student Id"
  //            onChange = {(event,newValue) => this.setState({username:newValue})}
  //            />
  //          <br/>
  //            <TextField
  //              type="password"
  //              hintText="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange = {(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //        </MuiThemeProvider>
  //     )
  //     this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
  //   }
  //   else if(this.props.role == 'teacher'){
  //     console.log("in teacher componentWillMount");
  //     var localloginComponent=[];
  //     localloginComponent.push(
  //       <MuiThemeProvider>
  //         <div>
  //          <TextField
  //            hintText="Enter your College Rollno"
  //            floatingLabelText="Teacher Id"
  //            onChange={(event,newValue) => this.setState({username:newValue})}
  //            />
  //          <br/>
  //            <TextField
  //              type="password"
  //              hintText="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange={(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //        </MuiThemeProvider>
  //     )
  //     this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
  //   }
  // }
  // }
  handleClick(event){
    var apiBaseUrl = "http://localhost:8060/auth/";
    var self = this;
    var payload={
      "username":this.state.username,
      "password":this.state.password,
    }
     axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
     console.log(response);
       console.log("Login successfull");
       var userScreen=[];
        userScreen.push(<UserScreen appContext={self.props.appContext} role={self.state.loginRole}/>)
        self.props.appContext.setState({loginPage:[],uploadScreen:userScreen})
   //   }
   //   else if(response.data.code == 204){
   //     console.log("Username password do not match");
        alert("login success")
    })
    .catch(function (error) {
      console.log(error);
      alert("Login Failed");
    });
  }


  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1){
      loginRole='user';
    }
    else if(value == 2){
      loginRole='admin';
 
    }
    this.setState({menuValue:value,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="Login"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login as:</p>
        <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="User" />
          <MenuItem value={2} primaryText="Admin" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;