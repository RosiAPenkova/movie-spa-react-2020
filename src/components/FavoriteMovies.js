import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import MovieCard from "./movieCard/MovieCard";
class FavoriteMovies extends Component {

    
    getFavoriteMovies = () => {
        const favoriteMovies = this.props.favoriteMovies
        const favoriteMoviesList = favoriteMovies.map((movie, index) => {
            return <div key={movie.id}>
            <MovieCard/>
            </div>
        })
        
        return favoriteMoviesList;
    }
    render() {
        return <div>
            {this.getFavoriteMovies()}
        </div>
    }
}
const mapStateToProps = state => {
    return {
        favoriteMovies: state.favoriteMovies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        addFavoriteMovie: actions.addFavoriteMovie,
        removeFavoriteMovie: actions.removeFavoriteMovie
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(FavoriteMovies);