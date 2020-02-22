import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";


/* Component */

class UpcomingMovieComponent extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieInfo(movieId);
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
            src={constants.basePosterURL + this.props.movieInfo.poster_path}/>
            <div className="p-3 d-flex flex-column">
                <div className="pb-3 ">
                   <h4 className="movie-title">{this.props.movieInfo.title}</h4>
                    <p className="release-date">{moment(this.props.movieInfo.release_date).format("MMMM Do YYYY")}</p>
                    <div>{this.props.movieInfo.vote_average }% User Score</div>
                    </div>
            
            </div>
        </div>
</div>
    }
}

const mapStateToProps = state => {
    return {
        movieInfo: state.movieInfo,
        
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovieInfo: actions.setMovieInfo,
        getMovieInfo: actions.getMovieInfo,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)
        (withRouter(UpcomingMovieComponent));