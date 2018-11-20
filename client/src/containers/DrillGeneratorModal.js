import React from 'react'; 
import { Modal } from 'react-bootstrap'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services';

class DrillGeneratorModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false, 
            data: null
        }

        this.handleClose = this.handleClose.bind(this); 
        this.handleShow = this.handleShow.bind(this); 
    }

    handleClose() {
        this.props.mount(); 
        this.setState({ show: false });
    }

    handleShow() {
        drillsGeneratorServices.readRandom()
            .then(response => {
                this.setState({
                    show: true,
                    data: response
                })
            })
            .catch(console.log)
    }

    render() {
        const select = this.state.data ? this.state.data.map(item => {
            return (
                <div className="container">
                    <div className="row" style={{ color: "black" }}>
                        <div style={{ textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px" }}>
                            <p style={{fontSize: "25px"}}><strong>{item.Name}</strong></p>
                            <p><strong>Description:</strong> {item.Description}</p>
                            <p><strong>Length:</strong> {item.Length} minutes</p>
                            <p><strong>Difficulty:</strong> {item.DrillLevel} </p>
                        </div>
                    </div>
                </div>
            )
        })
            : "is loading"
        return (
            <React.Fragment>
                <button className="btn btn-xl btn-outline-light" style={{color: "#1A2930"}} onClick={this.handleShow}>Find Me A Drill</button>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{top:"25%"}} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Body>
                        {select}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }

}

export default DrillGeneratorModal; 