import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
import * as drillsCategoriesServices from '../services/drillsCategories.services'; 
// import { ThemeProvider } from '@zendeskgarden/react-theming';
import '@zendeskgarden/react-checkboxes/dist/styles.css';
import "./DrillGenerator.css";
import { Grid, Row, Col, ControlLabel } from 'react-bootstrap'; 
import { Checkbox, Label } from '@zendeskgarden/react-checkboxes'; 
import { withRouter } from 'react-router-dom'; 
import DrillGeneratorModal from './DrillGeneratorModal'; 
class DrillGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            select: false,
            data: null, 
            isChecked: null
        }
        this.onFind = this.onFind.bind(this);
        this.toAdd = this.toAdd.bind(this);
        this.toList = this.toList.bind(this);
        this.onModalClose = this.onModalClose.bind(this); 
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        drillsCategoriesServices.getDrillType()
            .then(response => {
                this.setState({
                    type: response.data
                })
            })
            .catch(console.log)

    }

    onModalClose() {
        this.setState({
            isChecked: false
        })
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

    onChange(e) {
        console.log(e.target.value)
    }

    toAdd() {
        this.props.history.push('/drill-form', window.scrollTo(0, 0))
    }

    toList() {
        this.props.history.push('/drill-list', window.scrollTo(0, 0))
    }

    render() { 
        return (
            <React.Fragment>
                <div className="masthead bg-primary text-white text-center" id="page-top">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4 style={{color: "#1A2930"}} >What do you want to practice?</h4>
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
                                <Checkbox onChange={this.onChange} value="1" checked={this.state.isChecked}>
                                    <Label>Fundamentals</Label>
                                </Checkbox>
                                <Checkbox onChange={this.onChange} value="2" checked={this.state.isChecked} >
                                    <Label>Control/Dexterity</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked} >
                                    <Label>Endurance</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked} >
                                    <Label>Speed</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md body-container" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}}>
                            <div style={{textAlign:"center"}}>
                                <i className="fas fa-drum text-primary mb-3" style={ {fontSize: "30px"}}></i>
                                <br/>
                                <ControlLabel style={{color:"#1A2930", textAlign: "center"}}>EQUIPMENT</ControlLabel>
                                </div>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Shime</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Beta</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Naname</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Odaiko</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md body-container" style={{textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px"}}>
                                <div style={{textAlign:"center"}}>
                                <i className="fas fa-bars text-primary mb-3" style={{fontSize: "30px"}}></i>
                                <br/>
                                <ControlLabel style={{color:"#1A2930", textAlign: "center"}}>DIFFICULTY</ControlLabel>
                                </div>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Beginner</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Intermediate</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Advanced</Label>
                                </Checkbox>
                            </Col>
                            <Col className="col-md"></Col>
                        </Row>
                    </Grid>
                    
                    <br /><br />
                    {/* <button className="btn btn-xl btn-outline-light" style={{color: "#1A2930"}} onClick={this.onFind}>Find Me A Drill</button> */}
                    <DrillGeneratorModal mount={this.onModalClose} />
                    <br /><br />
                    <br /><br />
                    {/* {select} */}
                    <br /><br />
                    <br /><br />
                </div>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 text-center">
                                
                            </div>
                            <div className="col-md text-center nav-container" >
                                <div className="service-box mt-5 mx-auto" onClick={this.toAdd}>
                                    <i className="fas fa-4x far fas fa-plus-circle text-primary mb-3 sr-icon-2"></i>
                                    <h3 className="mb-3">Add A Drill</h3>
                                    <p className="text-muted mb-0">Have a new drill idea? Add it here!</p>
                                </div>
                            </div>
                            <div className="col-md text-center nav-container">
                                <div className="service-box mt-5 mx-auto" onClick={this.toList}>
                                    <i className="fas fa-4x fas fa-list-alt text-primary mb-3 sr-icon-2"></i>
                                    <h3 className="mb-3">View All Drills</h3>
                                    <p className="text-muted mb-0">Not sure if we have the drill you have in mind? View and search here!</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                
                            </div>
                        </div>

                    </div>
                </section>
                <div className="container-fluid about-body" id="about">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 about-card">
                            <br/><br/><br/>
                            <i className="fas fa-circle-notch" style={{ fontSize: "30px", color: "#F7CE3E" }} />
                            <div className="footer-head">
                                <h2>About</h2>
                            </div>
                            <p>Drill Generator is an app created for taiko drummers.
                                Not sure what to practice or need a new drill idea? Use the random generator to pick a drill for you!
                                    You can also build your own drills or view all existing drills. </p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default withRouter(DrillGenerator); 