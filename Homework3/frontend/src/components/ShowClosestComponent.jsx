import React, { Component } from 'react';
import ClosestService from '../services/ClosestService';
import { Link } from 'react-router-dom'
class ShowClosestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closest: [],
            category: ''
        }
    }
    componentDidMount(){
        ClosestService.getClosest().then((res) => {
            this.setState({closest: res.data});
            this.setState({category: res.data[0].category+"s"});
        });
    }
    render() {
        return (
            <div className='grayBackground'>
                <h1 className='ml-5 p-5'><span className='blueText'>{this.state.category}</span> <span>near you:</span></h1>
            <div className='listContainer pt-2'>
                {this.state.closest.map(close =>
                <div className='listItem '>
                    <img className='listImg' src={close.imgUrl}></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h6 className='textDarkGray mt-1'>{close.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{close.name}</h5>
                    <Link to={`/${close.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png'></img></Link>
                </div>
                )}
            </div>
            </div>
        );
    }
}           

export default ShowClosestComponent;