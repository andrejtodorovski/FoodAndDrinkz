import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopNavBarComponent extends Component {
    render() {
        const buttonStyle = {
            borderRadius: "20px"
        };
        const logoStyle = {
            padding: "30px"
        };
        const logStyle = {
            padding: "5px"
        }
        return (
            <div className='d-flex p-2 justify-content-around bg-secondary bg-gradient'>
                <div>
                    <button type="button" className="btn btn-danger" style={buttonStyle}><span style={logoStyle}><Link to="/">FoodAndDrinkz</Link></span></button>
                </div>
                <div>
                    <button type="button" className="btn btn-light" style={buttonStyle}><span style={logStyle}><Link to="/login">Login</Link></span></button>
                    <button type="button" className="btn btn-dark" style={buttonStyle}><span style={logStyle}><Link to="/register">Sign Up</Link></span></button>
                </div>
                
            </div>
            
        );
    }
}

export default TopNavBarComponent;