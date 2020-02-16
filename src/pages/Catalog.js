import React, { Component } from 'react';
import MovieCard from "../components/movieCard/MovieCard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

  

class Catalog extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            primary_release_year: new Date().getFullYear()
        }
    }
    
    componentDidMount(){
        this.discoverMovies();
    }

    discoverMovies = () => {
        this.props.getMdDiscoverMovies({
            primary_release_year: this.state.primary_release_year,
            page: this.props.currentPage
        })
    }

    getMovieList = () => {
      
       
        const movieList = 
            this.props.movieDatabaseMovies.map( movie => {
            return <MovieCard 
                key={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                genres={movie.genres}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
                budget={movie.budget}
                status={movie.status}
                video={movie.video}
                original_language={movie.original_language}
                revenue={movie.revenue}
                runtime = {movie.runtime}
                id={movie.id}
            />        
            

        });
        return movieList
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
    return  <>
        <div>
        <div className="row mt-10">
        <h1>Discover New Movies</h1>
        </div>
        <div className="main-container">
            <div className="row mb-5">
                <div className="col-md-3">
                    <div className="input-group-prepend">
                    <label className="input-group-text"
                         htmlFor="release-year">Year</label>
                    </div>
                    <select
                        onChange={this.releaseYearOnChange}
                        value={this.state.primary_release_year}
                        className="custom-select" 
                        id="release-year">
                        {this.getAvailableReleaseYears()}
                    </select>
                    {/* <select
                        onChange={this.sortBy}
                        value={this.state.sort_by}
                        className="custom-select" 
                        id="sort-by">
                        {this.getAvailableSort()}
                    </select> */}

                </div>
            </div>
            <div className="row">
                {this.getMovieList()}
            </div>
        </div>
        <div className="row mb-3">
                <div className="col">
                    <ul className="pagination">
                        {this.getPages()}
                    </ul>
                </div>
            </div>
        
    </div>
</>
}
}

const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
        currentPage: state.currentPage,
        totalPages: state.totalPages
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        setCurrentPage: actions.setCurrentPage,
                getMdDiscoverMovies: actions.getMdDiscoverMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Catalog);