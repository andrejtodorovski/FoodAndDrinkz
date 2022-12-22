import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/TopNavBarComponent.css'
class StartPageComponent extends Component {
    render() {
        const buttonStyle = {
            borderRadius: "20px"
        };
        // const logoStyle = {
        //     padding: "30px"
        // };
        const logStyle = {
            padding: "5px"
        }
        return (
            <div className='topNavBarContainerRadius'>
                <div className='startPageContainer'>
                    <div className='centeredBoth'>
                        <div><h1 className='display-4 font-weight-bold textDarkGray'>Find the best places for <span className="textMaroon">you</span> in Skopje</h1></div>
                        <div><h5 className='text-muted'>Everything you need</h5>
                            <h5 className='text-muted'>in just a few clicks</h5>
                        </div>
                    </div>
                    <div className='centeredImg'>
                            <Link to="/findClosest" className='resizeImg'>
                            <img className='resizeImg' src={"https://i.ibb.co/z2bcPqh/f.jpg"} alt={"mapImg"}/></Link>
                    </div>
                </div>
                <div>
                    <div className='centered'>
                        <button type="button" class="btn blueBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/38/38706.png'></img>
                            <span style={logStyle}><Link to="/bars" className='text-white'>Bars</Link></span>
                        </button>
                        <button type="button" class="btn orangeBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/5370/5370139.png'></img>
                            <span style={logStyle}><Link to="/restaurants" className='text-white'>Restaurants</Link></span>
                        </button>
                        <button type="button" class="btn redBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/751/751621.png'></img>
                            <span style={logStyle}><Link to="/cafes" className='text-white'>Cafes</Link></span>
                        </button>
                        <button type="button" class="btn"><span><Link to="/place/add">Add Place</Link></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartPageComponent;