import React from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap'; 
import { withRouter } from 'react-router-dom'; 
import * as validation from '../utils/validation'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
class DrillForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: {
                touched: false,
                value: ''
            }, 
            description: {
                touched: false, 
                value: ''
            }, 
            level: {
                touched: false, 
                value: ''
            }, 
            equipment: {
                touched: false, 
                value: ''
            }, 
            type: {
                touched: false, 
                value: ''
            }, 
            drillLength: {
                touched: false, 
                value: ''
            }
        }
        this.handleChange = this.handleChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    }

    checkValidation() {
        return validation.getCharValidation(this.state.name) &&
            validation.getCharValidation(this.state.description) &&
            validation.getNumValidation(this.state.level) &&
            validation.getNumValidation(this.state.equipment) &&
            validation.getNumValidation(this.state.type) &&
            validation.getNumValidation(this.state.drillLength)
    }

    onSubmit(e) {
        e.preventDefault(); 
        const data = {
            name: this.state.name.value, 
            description: this.state.description.value, 
            level: parseInt(this.state.level.value), 
            equipment: parseInt(this.state.equipment.value), 
            type: parseInt(this.state.type.value), 
            drillLength: parseInt(this.state.drillLength.value)
        }
        if (this.checkValidation()) {
            drillsGeneratorServices.post(data)
                .then(() => {
                    setTimeout(this.props.history.push("/drill-list"), 3000);
                })
                .catch(console.log)
        } else {
            alert("Please check all fields")
        }
    }

    handleChange(event) {
        const newObj = {
            touched: true, 
            value: event.target.value
        }
        this.setState({
            [event.target.name]: newObj
        })
    }

    render() {
        return (
            <React.Fragment>
                <section class="bg-primary" id="drill">
                    <div class="container">
                    <br /><br /><br /><br />
                        <div class="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <h4 style={{color: "#1A2930"}}>Add A Drill</h4>
                                <form>
                                    <FormGroup>
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            className={validation.getCharValidation(this.state.name)}
                                            name="name"
                                            value={this.state.name.value}
                                            placeholder="Enter drill name"
                                            onChange={this.handleChange}
                                        />  
                                        <FormControl.Feedback />
                                        {validation.getCharValidation(this.state.name) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter drill name</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl 
                                            textarea
                                            className={"textarea-autosize" + validation.getCharValidation(this.state.description)}
                                            name="description"
                                            value={this.state.description.value}
                                            placeholder="Enter drill description"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getCharValidation(this.state.description) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter drill description</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup> 
                                        <ControlLabel>Level Id</ControlLabel>
                                        <FormControl
                                            type="number"
                                            className={validation.getNumValidation(this.state.level)}
                                            name="level"
                                            value={this.state.level.value}
                                            placeholder="Enter drill level"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.level) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter a number between 1-3</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Equipment Id</ControlLabel>
                                        <FormControl
                                            type="number"
                                            className={validation.getNumValidation(this.state.equipment)}
                                            name="equipment"
                                            value={this.state.equipment.value}
                                            placeholder="Enter drill equipment"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.equipment) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter a number between 1-4</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Type Id</ControlLabel>
                                        <FormControl
                                            type="number"
                                            className={validation.getNumValidation(this.state.type)}
                                            name="type"
                                            value={this.state.type.value}
                                            placeholder="Enter drill type"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.type) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter a number between 1-4</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Length</ControlLabel>
                                        <FormControl
                                            type="number"
                                            className={validation.getNumValidation(this.state.drillLength)}
                                            name="drillLength"
                                            value={this.state.drillLength.value}
                                            placeholder="Enter drill length"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.drillLength) === "invalid" ? <HelpBlock style={{color: "red"}}>* Please enter a number</HelpBlock> : null}
                                    </FormGroup>
                                    <br />
                                    <button className="btn btn-light btn-md js-scroll-trigger" style={{width: "100%"}} onClick={this.onSubmit} value={this.state.id}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    
                </section>

            </React.Fragment>
        )
    }
}

export default withRouter(DrillForm); 