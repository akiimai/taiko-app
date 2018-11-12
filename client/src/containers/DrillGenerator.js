import React from 'react';

class DrillGenerator extends React.Component {
    constructor(props) {
        super(props) 

    this.onFind = this.onFind.bind(this); 

    }

    onFind() {

    }

    render() {
        return (
            <div className="masthead bg-primary text-white text-center">
                <h4>What do you want to practice?</h4>
                
                <br /><br />
                <button class="btn btn-xl btn-outline-light" onClick={this.onFind}>Find Me A Drill</button>
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />

            </div>
        )
    }
}

export default DrillGenerator; 