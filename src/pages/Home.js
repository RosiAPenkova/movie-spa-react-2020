import React, {Component} from 'react';
import { useSelector, useDispatch } from "react-redux";

import setActionCount from "../redux/actions/counter";
import {Container, Row, Col, Button} from 'reactstrap';
import { connect } from "react-redux";



class Home extends Component{
 

    render() {
        return <>
        <div className="main-contain">
          <div className="d-flex justify-content-center d-table-cell align-middle">
            <Container>
              <Row>
                <div
                  className=" text-center col-md-12" >
                  <h1 className="h1-responsive font-weight-bold boxed animation animated-item-1 fade-down no-display animated fadeInDown appear">
                  Welcome to The Amateur Film App®
                  </h1>
                  <h2 className="h2-responsive boxed animation animated-item-2 fade-down no-display animated fadeInDown appear">
                  Save those you want to see.
                  </h2>
                  <hr className="hr-light" />
                  
                  <Button outline color="white" className="btn btn-md animation bounce-in no-display animated bounceIn appear" onClick={event =>  window.location.href='/catalog'}>
                    View  More
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        </>
    }
}
export default Home;

 