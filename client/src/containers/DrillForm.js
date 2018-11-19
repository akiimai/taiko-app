import React from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import * as validation from '../utils/validation';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
import { levelData, lengthData, equipmentData, typeData } from './data';
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
            equipmentValue: [],
            type: {
                touched: false,
                value: ''
            },
            typeValue: [],
            drillLength: {
                touched: false,
                value: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    checkValidation() {
        return validation.getCharValidation(this.state.name) &&
            validation.getCharValidation(this.state.description) &&
            validation.getCharValidation(this.state.level) &&
            // validation.getNumValidation(this.state.equipment) &&
            // validation.getNumValidation(this.state.type) &&
            validation.getNumValidation(this.state.drillLength)
    }

    onSubmit(e) {
        debugger
        e.preventDefault();
        const data = {
            name: this.state.name.value,
            description: this.state.description.value,
            level: this.state.level.value,
            equipment: this.state.equipmentValue,
            type: this.state.typeValue,
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

    handleSelect(event) {
        let value = []; 
        if (event[0] && event[0].name === 'equipment') {
            for (let i = 0; i < event.length; i++) {
                value.push(event[i].value)
            }
            this.setState({
                equipmentValue: value
            })
        } else if (event[0] && event[0].name === 'type') {
            for (let i = 0; i < event.length; i++) {
                value.push(event[i].value)
            }
            this.setState({
                typeValue: value
            })
        }

        if (event.name === 'level') {
            const newObj = {
                touched: true,
                value: event.label
            }
            this.setState({
                level: newObj
            })
        } else if (event.name === 'drillLength') {
            const newObj = {
                touched: true,
                value: event.value
            }
            this.setState({
                drillLength: newObj
            })
        }
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
                                <h4 style={{ color: "#1A2930" }}>Add Drill</h4>
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
                                        {validation.getCharValidation(this.state.name) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter drill name</HelpBlock> : null}
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
                                        {validation.getCharValidation(this.state.description) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter drill description</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Level</ControlLabel>
                                        <Select
                                            closeMenuOnSelect={true}
                                            options={levelData}
                                            onChange={this.handleSelect}
                                            name="level"
                                            placeholder="Select a drill level"
                                        />
                                        {validation.getCharValidation(this.state.level) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please select a drill level</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Equipment</ControlLabel>
                                        <Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            options={equipmentData}
                                            onChange={this.handleSelect}
                                            // name="equipment"
                                            // value={this.state.equipmentValue}
                                        />
                                        {validation.getNumValidation(this.state.equipment) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Type</ControlLabel>
                                        <Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            options={typeData}
                                            onChange={this.handleSelect}
                                        // name="equipment"
                                        // value={this.state.equipmentValue}
                                        />
                                        {validation.getNumValidation(this.state.type) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Length</ControlLabel>
                                        <Select
                                            closeMenuOnSelect={true}
                                            options={lengthData}
                                            onChange={this.handleSelect}
                                            name="drillLength"
                                            placeholder="Select a drill length"
                                        />
                                    </FormGroup>
                                    <br />
                                    <button className="btn btn-light btn-md js-scroll-trigger" style={{ width: "100%" }} onClick={this.onSubmit} value={this.state.id}>
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