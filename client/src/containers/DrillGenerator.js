import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
// import { ThemeProvider } from '@zendeskgarden/react-theming';
import '@zendeskgarden/react-checkboxes/dist/styles.css';
import "./DrillGenerator.css";
import { Grid, Row, Col, ControlLabel } from 'react-bootstrap'; 
import { Checkbox, Label } from '@zendeskgarden/react-checkboxes'; 
class DrillGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            select: false,
            data: null
        }
        this.onFind = this.onFind.bind(this);
    }

    onFind() {
        drillsGeneratorServices.readRandom()
            .then(response => {
                this.setState({
                    select: true,
                    data: response
                })
            })
            .catch(console.log)
    }

    render() { 
        let select;
        if (this.state.select) {
            select = this.state.data ? this.state.data.map(item => {
                return (
                    <div className="container">
                        <div className="row" style={{color: "black"}}>
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}}>
                                <p><strong>Name:</strong> {item.Name}</p>
                                <p><strong>Description:</strong> {item.Description}</p>
                                <p><strong>Length:</strong> {item.Length} </p>
                            </div>
                            <div className="col-lg-3"></div>

                        </div>
                    </div>
                )
            })
                : "is loading"
        }

        return (
            <React.Fragment>
                <div className="masthead bg-primary text-white text-center">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4 style={{color: "#1A2930"}}>What do you want to practice?</h4>
                    <br />
                    <Grid>
                        <Row>
                            <Col className="col-md"></Col>
                            <Col className="col-md body-container" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}} >
                                <div style={{textAlign:"center"}}>
                                <i className="fas fa-brain text-primary mb-3" style={{fontSize: "30px", color:"F7882F"}}></i>
                                <br/>
                                <ControlLabel style={{color:"#1A2930", textAlign: "center"}}>TYPE</ControlLabel>
                                </div>
                                <Checkbox>
                                    <Label>Fundamentals</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Control/Dexterity</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Endurance</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Speed</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md body-container" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}}>
                            <div style={{textAlign:"center"}}>
                                <i className="fas fa-drum text-primary mb-3" style={{fontSize: "30px"}}></i>
                                <br/>
                                <ControlLabel style={{color:"#1A2930", textAlign: "center"}}>EQUIPMENT</ControlLabel>
                                </div>
                                <Checkbox>
                                    <Label>Shime</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Beta</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Naname</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Odaiko</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md body-container" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}}>
                                <div style={{textAlign:"center"}}>
                                <i className="fas fa-bars text-primary mb-3" style={{fontSize: "30px"}}></i>
                                <br/>
                                <ControlLabel style={{color:"#1A2930", textAlign: "center"}}>DIFFICULTY</ControlLabel>
                                </div>
                                <Checkbox>
                                    <Label>Beginner</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Intermediate</Label>
                                </Checkbox>
                                <Checkbox>
                                    <Label>Advanced</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md"></Col>
                        </Row>
                    </Grid>
                    
                    <br /><br />
                    <button className="btn btn-xl btn-outline-light" style={{color: "#1A2930"}} onClick={this.onFind}>Find Me A Drill</button>
                    <br /><br />
                    <br /><br />
                    {select}
                    <br /><br />
                    <br /><br />
                    <br /><br />
                </div>
                <section id="services">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Drills</h2>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                        <hr></hr>
                            <div className="col-lg-3 col-md-6 text-center">
                                
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x far fas fa-plus-circle text-primary mb-3 sr-icon-2"></i>
                                    <h3 className="mb-3">Add A Drill</h3>
                                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x fas fa-list-alt text-primary mb-3 sr-icon-1"></i>
                                    <h3 className="mb-3">See All Drills</h3>
                                    <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DrillGenerator; 