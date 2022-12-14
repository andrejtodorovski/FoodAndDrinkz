import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/TopNavBarComponent.css'
class LoggedTopNavBarComponent extends Component {
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
            <div className='topNavBarContainer pl-5'>
                <div className='btn1'>
                    <button type="button" className="btn maroonBut ml-5 mt-2" style={buttonStyle}><span style={logoStyle}><Link to="/" className='text-white'>PinPoint</Link></span></button>
                </div>
                <div className='btn2'>
                    <button type="button" className="btn whiteBut m-2" style={buttonStyle}><span style={logStyle}><Link to="/favorites" className='text-dark'>Favorites</Link></span></button>
                    <button type="button" className="btn grayBut m-2" style={buttonStyle}><span style={logStyle}><Link to="/user" className='text-white'>UserName</Link></span></button>
                </div>
                
            </div>
            
        );
    }
}

export default LoggedTopNavBarComponent;