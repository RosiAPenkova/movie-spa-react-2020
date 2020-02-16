import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import constants from "../constants";
import moment from "moment";

class MovieInfo extends Component {

   

    componentDidMount = () => {
        const movieId = this.props.match.params.id;
        this.props.getMovieInfo(movieId);
    }
    render() {
        return <div className="movie-detail">
        <div className="row movie-wrap">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                    <img className="movie-image" alt="" 
                    src={constants.basePosterURL + this.props.movieInfo.poster_path}/>
                    <div>{this.props.movieInfo.title} {moment(this.props.movieInfo.release_date).format("(YYYY)")}</div>
                    <div>{this.props.movieInfo.vote_average}% User Score</div>
                    <div className="header_info"><h3 dir="auto">Overview</h3>
                    <div className="mt-3b movie-description">{this.props.movieInfo.overview} </div>
                    <div className="mt-3b movie-description">{this.props.movieInfo.budget} </div>
                    <div className="mt-3b movie-description">{this.props.movieInfo.status} </div>
                    <div className="mt-3b movie-description">{this.props.movieInfo.original_language} </div>
                    <div className="mt-3b movie-description">{this.props.movieInfo.revenue} </div>
                    <div className="mt-3b movie-description">{this.props.movieInfo.runtime}min </div>
                    
                  
                        </div>
                    </div>
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
        (withRouter(MovieInfo));
