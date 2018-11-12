import React, { Component } from 'react'; 
import Nav from './Nav'; 
import Header from './Header'; 
import Content from './Content'; 


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Content />
            </div>
        )
    }
}

