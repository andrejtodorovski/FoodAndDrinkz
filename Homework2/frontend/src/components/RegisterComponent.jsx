import React, { Component } from 'react';

class RegisterComponent extends Component {
    render() {
        return (
        <div className='container'>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Register</h3>
                  <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                      type="username"
                      className="form-control mt-1"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          );
    }
}

export default RegisterComponent;