import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

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
            <div className="movie-wrap">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md">
                                <img className="movie-image" alt=""
                                    src={constants.PosterURL + this.props.movieInfo.poster_path} /></div>
                                <div className="col-md-8">
                                    <div className="my-4"><h1 className="d-inline-block">{this.props.movieInfo.title}</h1><sub>{moment(this.props.movieInfo.release_date).format("(YYYY)")}</sub></div>
                                    <div className="mb-3 rating"><span className="percentage">{this.props.movieInfo.vote_average }%</span> User Score</div>
                                    <div><h3 className="mt-4">Overview</h3>
                                        <div className="mt-3 movie-description ">{this.props.movieInfo.overview} </div>
                                    </div>
                            <div className="facts">
                                <h3 className="mt-4">Facts</h3>
                                <ol className="movie-facts">
                                    <li className="budget">
                                        <p>Budget</p>
                                        <div>${this.props.movieInfo.budget}</div>
                                    </li>
                                    <li className="revenue">
                                        <p>Revenue</p>
                                        <div>${this.props.movieInfo.revenue} </div>
                                    </li>
                                    <li className="runtime">
                                        <p>Runtime</p>
                                        <div>{this.props.movieInfo.runtime}min </div>
                                    </li>
                                    <li className="status">
                                        <p>Status</p>
                                        <div>{this.props.movieInfo.status} </div>
                                    </li>
                                    <li className="original-language">
                                        <p>Original Language</p>
                                        <div>{this.props.movieInfo.original_language} </div>
                                    </li>

                                </ol>
                            </div>
                            </div>
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
