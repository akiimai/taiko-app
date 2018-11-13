import React from 'react'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 

class DrillList extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        drillsGeneratorServices.readAll()
    }

    render() {
        return(
            <div className="masthead bg-primary text-white text-center">
                <h4>Drill List</h4>

                <br /><br />
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

export default DrillList; 