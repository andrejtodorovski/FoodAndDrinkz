import React, { Component } from 'react';
import ProfileService from '../services/ProfileService';
import { Link } from 'react-router-dom'
class ShowProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }
    componentDidMount(){
        ProfileService.getProfile().then((res) => {
            this.setState({profile: res.data});
            if(parseInt(res.data.length)<=0){
                window.location.href="/"
            }
        });
        
    }
    render() {
        return (
            <div className='grayBackground'>
                <div><h1 className='ml-5 p-5'><span className='blueText'>Your Profile</span></h1></div>

            <div className='grayBackground pt-2 m-5'>
                {
                    this.state.profile.map(p =>
                        <div className='w-5 pb-5'>
                        <div className='d-flex justify-content-around mb-4'><div>First Name: </div><div>{p.firstName}</div></div>
                        <div className='d-flex justify-content-around mb-4'><div>Last Name: </div><div>{p.lastName}</div></div>
                        <div className='d-flex justify-content-around mb-4'><div>Username: </div><div>{p.username}</div></div>
                        <div className='d-flex justify-content-around mb-4'><div>Email: </div><div>{p.email}</div></div>
                        </div>
                        )
                }
            </div>
            </div>
        );
    }
}           

export default ShowProfileComponent;