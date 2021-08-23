
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Form from './component/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      firstNameIsValid: false,
      lastNameIsValid: false,
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

  }


  handleFirstNameChange = (e) => {
    const regexFirstName = /^[a-z]{2,}$/i;
    this.setState({ firstNameIsValid: regexFirstName.test(e.target.value), firstName: e.target.value });

  };

  handleLastNameChange = (e) => {
    const regexLastName = /^[a-z]{2,}$/i;
    this.setState({ lastNameIsValid: regexLastName.test(e.target.value), lastName: e.target.value });

  };


  handleEmailChange = (e) => {
    const regexEmail = /^([\w]+\.{0,1})+@([\w]+\.)[\w]{2,4}$/;
    this.setState({ emailIsValid: regexEmail.test(e.target.value), email: e.target.value });

  };

  handlePasswordChange = (e) => {
    const regexPassword = /^\d{6,}$/;
    this.setState({ passwordIsValid: regexPassword.test(e.target.value), password: e.target.value });
    if (this.state.passwordIsValid) {
      console.log("password", this.state.password);
      console.log("password", this.state.passwordIsValid);
    };

  };

  handleRememberMeChange = (e) => {
    this.setState({ rememberMe: this.state.rememberMe ? false : true });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.firstNameIsValid && this.state.lastNameIsValid && this.state.passwordIsValid && this.state.emailIsValid) {
      this.setState({ isSubmitted: true });
    };
    
    setTimeout(() => {
      if (this.state.isSubmitted) {
        console.log("firstName:", this.state.firstName,",firstName is valid:", this.state.firstNameIsValid);
        console.log("lastName:", this.state.lastName,",lastName is valid:", this.state.lastNameIsValid);
        console.log("email:", this.state.email,",email is valid:", this.state.emailIsValid);
        console.log("passwordIsValid:", this.state.passwordIsValid);
        console.log("rememberIsChecked:", this.state.rememberMe);
        console.log("Is submit", this.state.isSubmitted);
        console.log("form is send");
        alert("formulaire envoyé!");
      }
    }, 1000)


  };




  render() {

    return (

      <Form onChangeFirstName={this.handleFirstNameChange} firstNameIsValid={this.state.firstNameIsValid} onChangeLastName={this.handleLastNameChange} lastNameIsValid={this.state.lastNameIsValid} onChangeEmail={this.handleEmailChange} emailIsValid={this.state.emailIsValid} onChangePassword={this.handlePasswordChange} passwordIsValid={this.state.passwordIsValid} onChangeRememberMe={this.handleRememberMeChange} onSubmit={this.handleSubmit} />

    );
  };


};
export default App;
