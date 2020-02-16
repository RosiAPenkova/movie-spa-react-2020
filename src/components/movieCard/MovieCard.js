import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';
import FavoriteMovies from '../FavoriteMovies';
class MovieCard extends Component {

    

    showMovieInfo = () => {
        this.props.history.push(`/movieinfo/${this.props.id}`);
    }
    render() {
        return <div className="col-md-6">
                <div className="d-flex
                flex-md-row
                flex-row
                border shadow-sm mb-3 bg-white rounded
                movie-card 
                ">
                   
                    <img className="movie-image" alt="" 
                    src={constants.basePosterURL + this.props.poster_path}/>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3 ">
                           <a href="" onClick={this.showMovieInfo}><h4 className="movie-title">{this.props.title}</h4></a>
                            <p className="release-date">{moment(this.props.release_date).format("MMMM Do YYYY")}</p>
                            <div>{this.props.vote_average }% User Score</div> <FavoriteMovies/>
                             
                            <div>{this.props.genres}</div>
                            <div className="mt-3b movie-description">
                                {this.props.overview}
                            </div>
                            
                        </div>
                        <div className="mt-auto border-top pt-3">
                            <button type="button"
                            onClick={this.showMovieInfo} 
                            className="btn btn-link">
                                More Info
                            </button>
                        </div> 
                    </div>
                </div>
        </div>
    }
}

export default withRouter(MovieCard);