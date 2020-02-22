import React, { useState, Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../redux/actions';
import UpcomingMovieComponent from '../components/upcomingMovie/UpcomingMovieComponent';



class UpcomingMovies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            primary_release_year: new Date().getFullYear(),
            upcomingMovies: []
        }
    }

    componentDidMount() {
        this.upcomingMovies();
    }

    upcomingMovies = () => {
        this.props.getMdUpcomingMovies({
            primary_release_year: this.state.primary_release_year,
            upcomingMovies: this.state.upcomingMovies,
            page: this.props.currentPage
        })
    }

    getUpcomingMovies = () => {

        const upcomingMovies =
            this.props.movieDatabaseMovies.map(movie => {
                return <UpcomingMovieComponent
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    id={movie.id}
                />

            });
        return upcomingMovies
    }

    getYears = () => {
        const availableYears = [];
        for(let i = new Date().getFullYear(); i > 2000; i--){
            availableYears.push(i);
        }
        return availableYears;
    }

    getAvailableReleaseYears = () => {

        const availableYearsOptions = this.getYears().map(year => {
            return <option 
            key={year} 
            value={year}>
                {year}
            </option>
        })
        return availableYearsOptions
    }

    releaseYearOnChange = e => {
        this.setState({
            primary_release_year: e.target.value 
        }, () => {
            this.discoverMovies();
        })
    }
    setSelectedPage = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.discoverMovies();
    }
    getPages = () => {
        const pages = [];
        for(let i = 1; i < this.props.totalPages; i++){
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
        <h1>Discover Upcoming Movies</h1>
            <ul className="list-group">
                {this.state.upcomingMovies}
            </ul>
              <div className="row mb-3">
                <div className="col">
                    <ul className="pagination">
                        {this.getPages()}
                    </ul>
                </div>
            </div>
        </>
    }

}


const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
        currentPage: state.currentPage,
        upcomingMovies: state.upcomingMovies,
        totalPages: state.totalPages

    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
       
        setCurrentPage: actions.setCurrentPage,
        getMdUpcomingMovies: actions.getMdUpcomingMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(UpcomingMovies);