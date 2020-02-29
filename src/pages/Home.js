import React, {Component} from 'react';
import { Button} from 'reactstrap';

class Home extends Component{
 

    render() {
        return <div className="container mt-5">
          <div className="row justify-content-center align-self-center">

                <div
                  className="text-center col-md-12" >
                  <h1 className="h1-responsive font-weight-bold boxed animation animated-item-1 fade-down no-display animated fadeInDown appear">
                  Welcome to The Amateur Movie App®
                  </h1>
                  <h2 className="h2-responsive boxed animation animated-item-2 fade-down no-display animated fadeInDown appear">
                  Save those you want to see.
                  </h2>
                  <hr className="hr-light" />
                  
                  <Button outline color="white" className="btn btn-md animation bounce-in no-display animated bounceIn appear" onClick={event =>  window.location.href='/catalog'}>
                    View  More
                  </Button>
                </div>
          </div>
        </div>
      
    }
}
export default Home;

 