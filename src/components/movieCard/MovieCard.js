import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Catalog from '../../pages/Catalog';


class MovieCard extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieInfo(movieId);
    }

    toggleFavoriteMovie = movie => {
           const movieIndex = this.props.favoriteMovies.findIndex(el => el.id === movie.id);

        if(movieIndex !== -1){
            this.props.removeFavoriteMovie(movieIndex);
        }else{
            this.props.addFavoriteMovie(movie);
        }
        console.log(this.props.favoriteMovies)
    }

    getActiveClass = movie => {
        if(this.props.favoriteMovies.findIndex(el => el.id === movie.id) !== -1){
            return "active"
        }
       
    }

   

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
                            <div>{this.props.vote_average }% User Score</div><i className={"fa fa-heart mr-3 favorite-movie " + this.getActiveClass(this.props.id)
                    }
                        onClick={() => {
                            this.toggleFavoriteMovie(this.props.id);
                        }}
                    ></i>
                            
                             
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
const mapStateToProps = state => {
    return{
        movies : state.movies,
        favoriteMovies: state.favoriteMovies
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovieInfo: actions.setMovieInfo,
        getMovieInfo: actions.getMovieInfo,
        addFavoriteMovie: actions.addFavoriteMovie,
        removeFavoriteMovie: actions.removeFavoriteMovie
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch) (withRouter(MovieCard));