import React from 'react'; 

class TaikoGlossary extends React.Component {
    constructor(props) {
        super (props)

        this.onClick = this.onClick.bind(this); 
    }
    
    onClick() {

    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1"> Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Description" />
                            </div>
                            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary" onClick={this.onClick}>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default TaikoGlossary; 