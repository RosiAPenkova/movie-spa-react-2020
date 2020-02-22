import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import FavoriteMovies from '../FavoriteMovies';


class MovieCard extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    toggleFavoriteMovie = movie => {
        // const movieIndex = this.props.favoriteMovies.findIndex(el => el.id === movie.id);

        const movieIndex = this.props.favoriteMovies.findIndex(el => el.id === movie.id);

        // const movieId = this.props.match.params.id;
        // this.props.getMovieInfo(movieId);

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
        return ""
    }

    getMovieList = () =>{
        const movieList = this.props.movies.map(movie => {
            return <i key={movie.id} className={
                    "fa fa-heart mr-3 favorite-movie " + 
                    this.getActiveClass(movie)
                }
                    onClick={() => {
                        this.toggleFavoriteMovie(movie);
                    }}
                ></i>
               
                               
        })
        return movieList;
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
                            <div>{this.props.vote_average }% User Score</div> 
                            <div>{this.getMovieList()}</div>
                             
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
        setMovies: actions.setMovies,
        getMovies: actions.getMovies,
        addFavoriteMovie: actions.addFavoriteMovie,
        removeFavoriteMovie: actions.removeFavoriteMovie
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch) (withRouter(MovieCard));