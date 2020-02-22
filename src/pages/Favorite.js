import React, {Component} from "react";
import FavoriteMovies from ".././components/FavoriteMovies";

    class Favorite extends Component {

        // Favorite Movie page преди да е избран любим филм 
        render() {
            return <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                        отговаря на FavoriteMovies.js
                            <FavoriteMovies/>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    
    export default Favorite;