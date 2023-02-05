import React, { Component } from 'react';
import MostVisitedService from '../services/MostVisitedService';
import TopRatedService from '../services/TopRatedService'
import '../styles/TopNavBarComponent.css'
import { Link } from 'react-router-dom'
class MostVisitedAndTopRatedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostVisited: [],
            topRated: []
        }
    }
    componentDidMount(){
        MostVisitedService.getMostVisited().then((res) => {
            this.setState({mostVisited: res.data});
        });
        TopRatedService.getTopRated().then((res) => {
            this.setState({topRated: res.data});
        });
    }
    render() {
        return (
            <div className='mt-5'>
                <h4 className='text-left ml-5 pl-5 text-white'>Most Visited Places</h4>
                <div className='d-flex p-2 flex-row justify-content-center whiteRound mx-5'>
                    {
                        this.state.mostVisited.map(mostVisitedPlace => 
                            <span className='w-20 h-20 px-2' key = {mostVisitedPlace.id}>
                                <div className='d-flex flex-column'>
                                    <span><img className='img-fluid imgRadius darken' src={mostVisitedPlace.imgUrl} alt={mostVisitedPlace.name}/></span>
                                    <span className='text-center text-white aboveImg'><Link to={`/${mostVisitedPlace.id}`} className='text-white fixHover'>{mostVisitedPlace.name}</Link></span>
                                </div>
                            </span>
                            )
                    }
                </div>
                <h4 className='text-left ml-5 mt-5 pl-5 text-white'>Top Rated Places</h4>
                <div className='d-flex p-2 flex-row justify-content-center whiteRound mx-5'>
                    {
                        this.state.topRated.map(topRatedPlace => 
                            <span className='w-20 h-20 px-2' key = {topRatedPlace.id}>
                                <div className='d-flex flex-column'>
                                <span><img className='img-fluid imgRadius darken' src={topRatedPlace.imgUrl} alt={topRatedPlace.name}/></span>
                                <span className='text-center aboveImg'><Link to={`/${topRatedPlace.id}`} className='text-white fixHover'>{topRatedPlace.name}</Link></span>
                                </div>
                            </span>
                            )
                    }
                </div>
            </div>
        );
    }
}           

export default MostVisitedAndTopRatedComponent;