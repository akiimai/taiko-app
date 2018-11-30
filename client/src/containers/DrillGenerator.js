import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
// import { ThemeProvider } from '@zendeskgarden/react-theming';
import '@zendeskgarden/react-checkboxes/dist/styles.css';
import "./DrillGenerator.css"; 
import DrillGeneratorModal from './DrillGeneratorModal';
import { Grid, Row, Col, ControlLabel } from 'react-bootstrap';
import { Checkbox, Label } from '@zendeskgarden/react-checkboxes'; 
import { withRouter } from 'react-router-dom'; 
import { levelData, equipmentData, typeData } from './data';
class DrillGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // select: false,
            data: null, 
        }
        this.onFind = this.onFind.bind(this);
        this.toAdd = this.toAdd.bind(this);
        this.toList = this.toList.bind(this);
        this.onModalClose = this.onModalClose.bind(this); 
        this.onChange = this.onChange.bind(this); 
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.setState({
            typeData: typeData, 
            equipmentData: equipmentData, 
            levelData: levelData
        }) 
    }

    onModalClose() {
        for (let i = 0; i < this.state.typeData.length; i++) {
            if (this.state.typeData[i].isChecked === true) {
                let obj = this.state.typeData
                obj[i].isChecked = null 
                this.setState({
                    typeData: obj
                })
            }
        }

        for (let i = 0; i < this.state.equipmentData.length; i++) {
            // if (this.state.typeData[i].isChecked === true) {
                let obj = this.state.equipmentData
                obj[i].isChecked = null 
                this.setState({
                    equipmentData: obj
                })
            // }
        }

        for (let i = 0; i < this.state.typeData.length; i++) {
            if (this.state.typeData[i].isChecked === true) {
                let obj = this.state.typeData
                obj[i].isChecked = null 
                this.setState({
                    typeData: obj
                })
            }
        }
    }

    onFind() {
        drillsGeneratorServices.readRandom()
            .then(response => {
                this.setState({
                    // select: true,
                    data: response
                })
            })
            .catch(console.log)
    }

    onChange(e, index) {
        if (!this.state.typeData[index].isChecked) {
            let obj = JSON.parse(JSON.stringify(this.state.typeData))
            obj[index].isChecked = true;
            this.setState({
                typeData: obj
            })
            console.log(obj)
        } 

        if (!this.state.equipmentData[index].isChecked) {
            let obj = JSON.parse(JSON.stringify(this.state.equipmentData))
            obj[index].isChecked = true;
            this.setState({
                equipmentData: obj
            })
            console.log(obj)
        } 

    }

    toAdd() {
        this.props.history.push('/drill-form', window.scrollTo(0, 0))
    }

    toList() {
        this.props.history.push('/drill-list', window.scrollTo(0, 0))
    }

    render() { 
        const type = this.state.typeData && this.state.typeData.map((item, index) => {
            return (
                <Checkbox onChange={e => this.onChange(e, index)} value={item.value} checked={item.isChecked}>
                    <Label>{item.label}</Label>
                </Checkbox>
            )
        })

        const equipment = this.state.equipmentData && this.state.equipmentData.map(item => {
            return (
                <Checkbox onChange={this.onChange} value={item.value} checked={this.state.isChecked}>
                    <Label>{item.label}</Label>
                </Checkbox>
            ) 
        })

        const level = this.state.levelData && this.state.levelData.map(item => {
            return (
                <Checkbox onChange={this.onChange} value={item.value} checked={this.state.isChecked}>
                    <Label>{item.label}</Label>
                </Checkbox>
            )
        })
        
        return (
            <React.Fragment>
                <div className="masthead bg-primary text-white text-center" id="page-top">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4>What do you want to practice?</h4>
                    <br />
                    <Grid>
                        <Row>
                            <Col className="col-md"></Col>
                            <Col className="col-md body-container">
                                <div className="category-body">
                                    <i className="fas fa-brain text-primary mb-3 category-icon"></i>
                                    <br />
                                    <ControlLabel className="category-title">TYPE</ControlLabel>
                                </div>
                                {type}
                            </Col>
                            <Col className="col-md body-container">
                                <div className="category-body">
                                    <i className="fas fa-drum text-primary mb-3 category-icon"></i>
                                    <br />
                                    <ControlLabel className="category-title">EQUIPMENT</ControlLabel>
                                </div>
                                {equipment}
                            </Col>
                            <Col className="col-md body-container">
                                <div className="category-body">
                                    <i className="fas fa-bars text-primary mb-3 category-icon"></i>
                                    <br />
                                    <ControlLabel className="category-title">DIFFICULTY</ControlLabel>
                                </div>
                                {level}
                            </Col>
                            <Col className="col-md"></Col>
                        </Row>
                    </Grid>
                    
                    <br /><br />
                    <DrillGeneratorModal mount={this.onModalClose} />
                    <br /><br /><br /><br /><br /><br /><br /><br />
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