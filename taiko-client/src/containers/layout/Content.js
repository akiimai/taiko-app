import React, { Component } from 'react'
import ContentRouter from '../routing/ContentRouter';
// import PageTransition from '../layout/PageTransition'

export default class Content extends Component {
  render() {
    return (
      <ContentRouter />

      // <section className="content">
      //   <div className="content__inner">        
      //     {/* <PageTransition /> */}
            
      //     <footer className="footer hidden-xs-down">
      //       {/* <p>© LA Pathways. All rights reserved.</p>

      //       <ul className="nav footer__nav">
      //         <a className="nav-link" href="">Homepage</a>

      //         <a className="nav-link" href="">Company</a>

      //         <a className="nav-link" href="">Support</a>

      //         <a className="nav-link" href="">News</a>

      //         <a className="nav-link" href="">Contacts</a>
      //       </ul> */}
      //     </footer>
      //   </div>
      // </section>
    )
  }
}
