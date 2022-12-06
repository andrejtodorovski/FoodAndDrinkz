import React, { Component } from 'react';
import MostVisitedService from '../services/MostVisitedService';
import TopRatedService from '../services/TopRatedService'
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
            <div>
                <h2 className='text-center'>Most Visited Places</h2>
                <div className='d-flex p-2 flex-row'>
                    {
                        this.state.mostVisited.map(mostVisitedPlace => 
                            <span className='w-20 h-20 p-2' key = {mostVisitedPlace.id}>
                                <span><img className='img-fluid' src={mostVisitedPlace.imgUrl} alt={mostVisitedPlace.name}/></span>
                                {/* <td>{mostVisitedPlace.name}</td>
                                <td>{mostVisitedPlace.rating}</td>
                                <td>{mostVisitedPlace.reviewCount}</td> */}
                            </span>
                            )
                    }
                </div>
                <h2 className='text-center'>Top Rated Places</h2>
                <div className='d-flex p-2 flex-row'>
                    {
                        this.state.topRated.map(topRatedPlace => 
                            <span className='w-20 h-20 p-2' key = {topRatedPlace.id}>
                                <span><img className='img-fluid' src={topRatedPlace.imgUrl} alt={topRatedPlace.name}/></span>
                                {/* <td>{mostVisitedPlace.name}</td>
                                <td>{mostVisitedPlace.rating}</td>
                                <td>{mostVisitedPlace.reviewCount}</td> */}
                            </span>
                            )
                    }
                </div>
            </div>
        );
    }
}           

export default MostVisitedAndTopRatedComponent;