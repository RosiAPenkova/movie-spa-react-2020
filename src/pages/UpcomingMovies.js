import React, { useState, Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../redux/actions';
import UpcomingMovieComponent from '../components/upcomingMovie/UpcomingMovieComponent';
import MovieCard from '../components/movieCard/MovieCard';



class UpcomingMovies extends Component {


    constructor(props) {
        super(props);
        this.state = {

            // upcomingMovies: []
        }
    }

    componentDidMount() {
        this.upcomingMovies();
    }

    upcomingMovies = () => {
        this.props.getMdUpcomingMovies({

            // upcomingMovies: this.state.upcomingMovies,
            page: this.props.currentPage
        })
    }

    getMdUpcomingMovies = () => {

        const upcomingMovies =
            this.props.movieDatabaseMovies.map(movie => {
                return <UpcomingMovieComponent
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    getGenres={movie.genres}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    overview={movie.overview}
                    budget={movie.budget}
                    status={movie.status}
                    video={movie.video}
                    original_language={movie.original_language}
                    revenue={movie.revenue}
                    runtime={movie.runtime}
                    id={movie.id}
                />

            });
        return upcomingMovies
    }


    setSelectedPage = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.discoverMovies();
    }
    getPages = () => {
        const pages = [];
        for (let i = 1; i < this.props.totalPages; i++) {
            pages.push(
                <li key={i} className="page-item">
                    <a className="page-link"
                        onClick={() => this.setSelectedPage(i)}
                        href="#">
                        {i}
                    </a>
                </li>);
        }
        return pages
    }

    render() {
        return <>
            <div>
                <h1 className="title text-center">Discover Upcoming Movies</h1>
                <div className="main-container">
                    <div className="row">
                            <div className="row">

                                {this.getMdUpcomingMovies()}

                            </div>
                    </div>
                </div>
                <ul className="pagination">
                    {this.getPages()}
                </ul>
            </div>



        </>
    }

}


const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
        currentPage: state.currentPage,
        // upcomingMovies: state.upcomingMovies,
        totalPages: state.totalPages

    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        setCurrentPage: actions.setCurrentPage,
        getMdUpcomingMovies: actions.getMdUpcomingMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(UpcomingMovies);