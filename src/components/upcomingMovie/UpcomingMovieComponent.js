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
  
    showMovieInfo = () => {
        this.props.history.push(`/movieinfo/${this.props.id}`);
    }
    render() {
        return <div className="col-md-6">
                <div className="
                flex-md-row
                flex-row bg-dark mb-3 bg-white rounded
                movie-card 
                ">
                   
                   <a href="" onClick={this.showMovieInfo}> <img className="movie-image" alt="" 
                    src={constants.basePosterURL + this.props.poster_path}/></a>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3 ">
                           <a href="" onClick={this.showMovieInfo}><h4 className="movie-title ">{this.props.title}</h4></a>
                            <p className="release-date">{moment(this.props.release_date).format("MMMM Do YYYY")}</p>
                            <div className="rating"><span className="percentage">{this.props.vote_average }%</span> User Score</div>
                            <div>{this.props.genres}</div>
                            <div className="mt-3b movie-description">
                                {this.props.overview}
                            </div>
                        </div>
                        <div className="mt-auto border-top pt-3">
                            <button type="button"
                            onClick={this.showMovieInfo} 
                            className="btn btn-link bounce-in animation pull-right">
                                More Info
                            </button>
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