import React from 'react';
import { Modal } from 'react-bootstrap';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
import ms from 'pretty-ms';
class DrillGeneratorModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            data: null,

            time: 0,
            isOn: false,
            start: 0
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }


    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({ time: 0, isOn: false })
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
        let start = (this.state.time == 0) ?
            <button className="btn btn-sm btn-outline-dark" onClick={this.startTimer}>Start</button> :
            null
        let stop = (this.state.time == 0 || !this.state.isOn) ?
            null :
            <button className="btn btn-sm btn-outline-dark" onClick={this.stopTimer}>Stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button className="btn btn-sm btn-outline-dark" onClick={this.startTimer}>Resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button className="btn btn-sm btn-outline-dark" onClick={this.resetTimer}>Reset</button>

        ////
        const select = this.state.data ? this.state.data.map(item => {
            return (
                // <div className="container">
                //     <div className="row" style={{ color: "black" }}>
                <div style={{ textAlign: "left", padding: "20px", margin: "10px", backgroundColor: "white", borderRadius: "10px" }}>
                    <p style={{ fontSize: "25px" }}><strong>{item.Name}</strong></p>
                    <p><strong>Description:</strong> {item.Description}</p>
                    <p><strong>Length:</strong> {item.Length} minutes</p>
                    <p><strong>Difficulty:</strong> {item.DrillLevel} </p>
                </div>
                //     </div>
                // </div>
            )
        })
            : "is loading"
        return (
            <React.Fragment>
                <button className="btn btn-xl btn-outline-light" style={{ color: "#1A2930" }} onClick={this.handleShow}>Find Me A Drill</button>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "25%" }} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Body>
                        <div className="container">
                            <div className="row" style={{ color: "black" }}>
                                {select}
                                
                                <div style={{ textAlign: "left", padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
                                <h4>Timer {ms(this.state.time)}</h4>
                                {start}
                                {resume}
                                {stop}
                                {reset}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }

}

export default DrillGeneratorModal; 