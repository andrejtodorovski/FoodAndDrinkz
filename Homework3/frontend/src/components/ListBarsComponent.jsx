import React, { Component } from 'react';
import BarsService from '../services/BarsService';
import { Link } from 'react-router-dom'
class ListBarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: []
        }
    }
    componentDidMount(){
        BarsService.getBars().then((res) => {
            this.setState({bars: res.data});
        });
    }
    render() {
        return (
            <div className='listContainer grayBackground pt-2'>
                {this.state.bars.map(bar =>
                <div className='listItem '>
                    <img className='listImg' src={bar.imgUrl}></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h6 className='textDarkGray mt-1'>{bar.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{bar.name}</h5>
                    <Link to={`/${bar.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png'></img></Link>
                </div>
                )}
            </div>
        );
    }
}           

export default ListBarsComponent;