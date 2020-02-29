import React, {Component} from "react";
import FavoriteMovies from ".././components/FavoriteMovies";

    class Favorite extends Component {

      
        render() {
            return <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                        You haven't added any favorite movies.
                            <FavoriteMovies/>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    
    export default Favorite;