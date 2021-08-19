
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Form from './component/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

  }


  handleEmailChange = (e) => {
    const regexEmail = /^([\w]+\.{0,1})+@([\w]+\.)[\w]{2,4}$/;
    this.setState({ emailIsValid: regexEmail.test(e.target.value), email: e.target.value });

  }

  handlePasswordChange = (e) => {
    const regexPassword = /^\d{6,}$/;
    this.setState({ passwordIsValid: e.target.value.length > 5 && regexPassword.test(e.target.value) });
    console.log("password", e.target.value);
    console.log("password", this.state.passwordIsValid);


  }

  handleRememberMeChange = (e) => {
    this.setState({ rememberMe: this.state.rememberMe ? false : true });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("passwordIsValid", this.state.passwordIsValid);
    console.log("emailIsValid", this.state.emailIsValid);
    console.log("rememberIsChecked", this.state.rememberMe)
    console.log("submit", this.state.isSubmitted)
    console.log("form is send");


    if (this.state.passwordIsValid && this.state.emailIsValid) {

      this.setState({ isSubmitted: true });
      this.state.isSubmitted && alert("formulaire envoyé!")

    }


  }


  render() {

    return (

      <Form onChangeEmail={this.handleEmailChange} onChangePassword={this.handlePasswordChange} emailIsValid={this.state.emailIsValid} onChangeRememberMe={this.handleRememberMeChange} onSubmit={this.handleSubmit} passwordIsValid={this.state.passwordIsValid} />

    )
  }


}
export default App;
