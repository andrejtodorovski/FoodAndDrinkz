import React, { Component } from 'react';
import FavoritesService from '../services/FavoritesService';
import { Link } from 'react-router-dom'
class ListFavoritePlacesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }
    componentDidMount(){
        FavoritesService.getFavoritePlaces().then((res) => {
            this.setState({favorites: res.data});
            if(parseInt(res.data.length)<=0){
                window.location.href="/"
            }
        });
        
    }
    render() {
        return (
            <div className='grayBackground'>
                <div><h1 className='ml-5 p-5'><span className='blueText'>Your favorite places</span></h1></div>

            <div className='listContainer grayBackground pt-2'>
                {this.state.favorites.map(f =>
                <div className='listItem '>
                    <img className='listImg' src={f.imgUrl}></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h6 className='textDarkGray mt-1'>{f.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{f.name}</h5>
                    <Link to={`/${f.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png'></img></Link>
                </div>
                )}
            </div>
            </div>
        );
    }
}           

export default ListFavoritePlacesComponent;