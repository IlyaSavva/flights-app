import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {

  state = {
    userName: '',
    userNameError: '',
    password: '',
    passwordError: '',
    isIncorrectLogs: false
}

  handleSubmit(e) {
    const userName = this.state.userName;
    const password = this.state.password;
    let errors = {
      userNameError: '',
      passwordError: ''
    };
    e.preventDefault();
    if ((userName === 'username') && (this.state.password === 'password')) {
      this.props.history.push('/flights')
    }
    else {
      if ( userName !== 'username') {
        errors.userNameError = 'Incorrect username';
      }
      if ( password !== 'password') {
        errors.passwordError = 'Incorrect password';
      }
      this.setState(errors);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <TextField
          name="userName"
          hintText="User Name"
          floatingLabelText="User Name"
          value={this.state.userName}
          onChange={e => this.handleChange(e)}
          errorText={this.state.userNameError}
          floatingLabelFixed={true}/><br/>
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
          errorText={this.state.passwordError}
          floatingLabelFixed={true}/><br/>
        <RaisedButton label="Submit" onClick={e => this.handleSubmit(e)} primary/>
      </form>
    )
  }
}