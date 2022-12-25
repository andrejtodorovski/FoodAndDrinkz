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
          p:'',
          rpassword:''
      }
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRPassword = this.handleRPassword.bind(this)
  }
  handleUsername = (event) => {
      this.setState({username:event.target.value});
  }
  handlePassword = (event) => {
      this.setState({password:event.target.value});
  }
  handleRPassword = (event) => {
    this.setState({rpassword:event.target.value});
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
      if(this.state.password===this.state.rpassword){
      fetch("http://localhost:8080/login/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(cred) 
    }).then(response => this.setState({p:response.ok}))
  }
  else{
    alert("Passwords don't match")
  }
  }
    render() {
      return (
        <div className='backImg'>
        <div className='d-flex flex-column text-center loginFormDiv'>
          <div><h3 className='text-white mb-5'>Create your account</h3></div>
          <div>
            <form className='d-flex flex-column text-center' onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="mt-1 form-control borderRadiusBut"
                  placeholder="FirstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstName}
                  required
                />
                <input
                  type="text"
                  className="mt-4 form-control borderRadiusBut"
                  placeholder="LastName"
                  value={this.state.lastName}
                  onChange={this.handleLastName}
                  required
                />
                <input
                  type="email"
                  className="mt-4 form-control borderRadiusBut"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  required
                />
                <input
                  type="username"
                  className="mt-4 form-control borderRadiusBut"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsername}
                  required
                />
                <input
                  type="password"
                  className="mt-4 form-control borderRadiusBut"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  required
                />
                <input
                  type="password"
                  className="mt-4 form-control borderRadiusBut"
                  placeholder="Repeat Password"
                  value={this.state.rpassword}
                  onChange={this.handleRPassword}
                  required
                />
                <div className='d-flex text-center justify-content-between mt-4'>
                  <button type='submit' onClick={this.handleSubmit} className='btn maroonBut text-white borderRadiusBut styleRoute mr-5'>Create Account</button>
                  <div>
                    <div className='text-white'>already have an account?</div>
                    <div><Link to='/login'>Log in here</Link></div>
                  </div>
                </div>
            </form>
          </div>
        </div>
        </div>
    );
    }
}

export default RegisterComponent;