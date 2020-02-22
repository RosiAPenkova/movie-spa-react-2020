import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class FavoriteMovies extends Component {

    //Favorite Movie page - след кликане на сърцето в MovieCard - Catalog
    getFavoriteMovies = () => {
        const favoriteMovies = this.props.favoriteMovies
        const favoriteMoviesList = favoriteMovies.map((movie, index) => {
            return <div key={movie.id} className="alert alert-success">
            [{movie.releaseYear}] 
            <i className="fa fa-star mx-2"></i> 
            {movie.title}
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