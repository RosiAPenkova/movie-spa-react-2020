import React, {Component} from 'react';
import { useSelector, useDispatch } from "react-redux";

import setActionCount from "../redux/actions/counter";
import {Container, Row, Col, Button,Card, CardBody} from 'reactstrap';
import { connect } from "react-redux";



class Home extends Component{
 

    render() {
        return <>
        <div>
          <div className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                  Welcome to The Amateur Film App®
                  </h1>
                  <h2 className="h1-responsive font-weight-bold">
                  Save those you want to see.
                  </h2>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <Button outline color="white">
                    Learn More
                  </Button>
                </div>

                <Col md="6" xl="5" className="mb-4">
                  <div type="fadeInRight" delay=".3s">
                    <Card id="classic-card">
                      <CardBody className="white-text">
                        <h3 className="text-center">
                          <div icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        
                        
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        </>
    }
}
export default Home;

 