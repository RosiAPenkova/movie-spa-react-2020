import React, { Component } from 'react';
import MovieCard from "../components/movieCard/MovieCard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../redux/actions';

  

class UpcomingMovies extends Component{

    constructor(props){
        super(props);
        this.state = {
            primary_release_year: new Date().getFullYear()
        }
    }

    componentDidMount(){
        this.upcomingMovies();
    }

    upcomingMovies = () => {
        this.props.getUpcomingMovies({
            primary_release_year: this.state.primary_release_year,
            page: this.props.currentPage
        })
    }

    getMovieInfo = () => {
      
        const movieInfo = 
            this.props.movieDatabaseMovies.map( movie => {
            return <MovieCard 
                key={movie.id}
                title={movie.title}
                id={movie.id}
            />        
            

        });
        return movieInfo
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
            this.upcomingMovies();
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
        return <ul className="list-group">
            {this.getMovieInfo()}
        </ul>
    }

  

}

const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
        movies: state.movies,
        upcomingMovies: state.upcomingMovies
        
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        
            setUpcomingMovies: actions.setUpcomingMovies,
            getUpcomingMovies: actions.getUpcomingMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(UpcomingMovies);