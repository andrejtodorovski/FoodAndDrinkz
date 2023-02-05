import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AdminService from '../services/AdminService';
import '../styles/TopNavBarComponent.css'
class StartPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h: [],
            isAdmin: false
        }
    }
    componentDidMount(){
        AdminService.getAdmin().then((res) => {
            this.setState({h: res.data});
            if(res.data==="admin"){
                this.setState({isAdmin: true})
            }
        });
    }
    render() {
        const buttonStyle = {
            borderRadius: "20px"
        };
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
                        <button type="button" className="btn blueBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/38/38706.png' alt=''></img>
                            <span style={logStyle}><Link to="/bars" className='text-white'>Bars</Link></span>
                        </button>
                        <button type="button" className="btn orangeBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/5370/5370139.png' alt=''></img>
                            <span style={logStyle}><Link to="/restaurants" className='text-white'>Restaurants</Link></span>
                        </button>
                        <button type="button" className="btn redBut m-2" style={buttonStyle}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/751/751621.png' alt=''></img>
                            <span style={logStyle}><Link to="/cafes" className='text-white'>Cafes</Link></span>
                        </button>
                        {this.state.isAdmin && 
                            <><button type="button" className="btn topNavBarContainerDark borderRadiusBut m-2"><span><Link to="/place/add" className='text-white'>Add New Place</Link></span></button></>}
                    </div>
                </div>
            </div>
        );
    }
}

export default StartPageComponent;