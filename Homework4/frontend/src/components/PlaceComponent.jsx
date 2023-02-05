import React, { Component } from 'react';
import PlaceService from '../services/PlaceService';
import '../styles/TopNavBarComponent.css'
class PlaceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: window.location.pathname.substring(1),
            place: {}
        }
    }
    componentDidMount(){
        PlaceService.getPlace(this.state.id).then(res => {
            this.setState({place : res.data});
        })
    }
    
    render() {
        return (
            <div className='grayBackground p-5'>
                <div className='d-flex ml-5 whiteBackground'>
                    <div className='width50 ml-5 mb-3'>
                        <h1 className='mt-3'>{this.state.place.name}</h1>
                        <div className='d-flex'>
                            <div><img className='icon mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h5 className='textDarkGray'>{this.state.place.rating}</h5></div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div><span className='textMaroon font-weight-bold'>Review count: </span><span>{this.state.place.reviewCount}</span></div>
                            <div><span><button className='btn grayBut text-white borderRadiusBut styleRoute mr-5'>
                                <img className="icon2 mr-2" src='https://cdn-icons-png.flaticon.com/512/3061/3061732.png'></img>
                                Show route
                                </button></span>
                                </div>
                        </div>
                        <div>
                            <span className='textMaroon font-weight-bold'>Phone number: </span>
                            <span>{this.state.place.phoneNumber}</span>
                        </div>
                        <div>
                            <span className='textMaroon font-weight-bold'>Address: </span>
                            <span>{this.state.place.address}</span>
                        </div>
                        <div>
                            <span className='textMaroon font-weight-bold'>Hours:</span>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray  font-weight-bold'>Monday</span>
                                    <span className='flexGrowOne'>{this.state.place.monday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Tuesday</span>
                                    <span className='flexGrowOne'>{this.state.place.tuesday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Wednesday</span>
                                    <span className='flexGrowOne'>{this.state.place.wednesday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Thursday</span>
                                    <span className='flexGrowOne'>{this.state.place.thursday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Friday</span>
                                    <span className='flexGrowOne'>{this.state.place.friday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Saturday</span>
                                    <span className='flexGrowOne'>{this.state.place.saturday}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className='flexGrowOne textDarkGray font-weight-bold'>Sunday</span>
                                    <span className='flexGrowOne'>{this.state.place.sunday}</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className='fitAll'>
                        <img className='fitAll imgHeight100' src={this.state.place.imgUrl} alt={this.state.place.name}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaceComponent;