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

            <div className='listContainer grayBackground pt-2'>
                {
                    this.state.profile.map(p =>
                        <div>{p.username}</div>)
                }
            </div>
            </div>
        );
    }
}           

export default ShowProfileComponent;