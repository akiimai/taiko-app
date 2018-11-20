import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
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
        // this.checkChange = this.checkChange.bind(this);
    }

    onModalClose() {
        this.setState({
            isChecked: false
        })
        // this.test()
    }

    // checkChange() {
    //     this.setState({
    //         isChecked: true
    //     })
    // }

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

    toAdd() {
        this.props.history.push('/drill-form', window.scrollTo(0, 0))
    }

    toList() {
        this.props.history.push('/drill-list', window.scrollTo(0, 0))
    }

    render() { 
        return (
            <React.Fragment>
                <div className="masthead bg-primary text-white text-center">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                                <Checkbox checked={this.state.isChecked}>
                                    <Label>Fundamentals</Label>
                                </Checkbox>
                                <Checkbox checked={this.state.isChecked} >
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
                                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-md text-center nav-container">
                                <div className="service-box mt-5 mx-auto" onClick={this.toList}>
                                    <i className="fas fa-4x fas fa-list-alt text-primary mb-3 sr-icon-2"></i>
                                    <h3 className="mb-3">See All Drills</h3>
                                    <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium.</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(DrillGenerator); 