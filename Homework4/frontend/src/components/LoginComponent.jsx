import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/TopNavBarComponent.css'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            p:''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsername = (event) => {
        this.setState({username:event.target.value});
    }
    handlePassword = (event) => {
        this.setState({password:event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let cred = {
            username:this.state.username,
            password:this.state.password
        }
        fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(cred) 
      }).then((response)=>
      response.json()
    ).then((user)=>{
      if(user.status!==406){
        window.location.href='/'
      }
      else{
        alert("User doesn't exist. Please check your credentials and try again");
      }
    })
    }
    render() {
        return (
          <div className='backImgLog'>
            <div className='d-flex flex-column text-center loginFormDiv'>
              <div className='loginText'><h2 className='text-white'>Login</h2></div>
              <div>
                <form className='d-flex flex-column text-center' onSubmit={this.handleSubmit}>
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
                    <div className='d-flex text-center justify-content-between mt-4'>
                      <button type='submit' className='btn maroonBut text-white borderRadiusBut styleRoute mr-2 pl-5 pr-5 mt-3 mb-3'>Login</button>
                      <div>
                        <div className='text-white'>don't have an account?</div>
                        <div><Link to='/register'>Register here</Link></div>
                      </div>
                    </div>
                </form>
              </div>
            </div>
            </div>
        );
    }
}

export default LoginComponent;