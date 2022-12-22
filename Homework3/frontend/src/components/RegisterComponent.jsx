import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class RegisterComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          username:'',
          password:'',
          firstName:'',
          lastName:'',
          email:'',
          p:''
      }
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsername = (event) => {
      this.setState({username:event.target.value});
  }
  handlePassword = (event) => {
      this.setState({password:event.target.value});
  }
  handleFirstName = (event) => {
    this.setState({firstName:event.target.value});
  }
  handleLastName = (event) => {
    this.setState({lastName:event.target.value});
  }
  handleEmail = (event) => {
    this.setState({email:event.target.value});
  }
  handleSubmit = (event) => {
      event.preventDefault();
      let cred = {
          username:this.state.username,
          password:this.state.password,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email
      }
      console.log(cred)
      fetch("http://localhost:8080/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(cred) 
    }).then(response => this.setState({p:response.ok}))
  }
    render() {
      return (
        <div className='d-flex flex-column text-center loginFormDiv'>
          <div>Create your account</div>
          <div>
            <form className='d-flex flex-column text-center'>
                <input
                  type="text"
                  className="mt-1"
                  placeholder="FirstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstName}
                />
                <input
                  type="text"
                  className="mt-1"
                  placeholder="LastName"
                  value={this.state.lastName}
                  onChange={this.handleLastName}
                />
                <input
                  type="email"
                  className="mt-1"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <input
                  type="username"
                  className="mt-1"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
                <input
                  type="password"
                  className="mt-1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <input
                  type="password"
                  className="mt-1"
                  placeholder="Repeat Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <div className='d-flex text-center justify-content-between'>
                  <button type='submit' onClick={this.handleSubmit}><Link to='/'>Create Account</Link></button>
                  <div>
                    <div>already have an account?</div>
                    <div><Link to='/login'>Log in here</Link></div>
                  </div>
                </div>
            </form>
          </div>
        </div>
    );
    }
}

export default RegisterComponent;