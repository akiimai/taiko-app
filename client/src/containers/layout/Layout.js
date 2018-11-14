import React, { Component } from 'react'; 
import Nav from './Nav'; 
// import Header from './Header'; 
// import Content from './Content'; 
import ContentRouter from '../routing/ContentRouter';
import Footer from './Footer'; 
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* <Header /> */}
                <ContentRouter />
                <Footer />
            </div>
        ); 
    }
}