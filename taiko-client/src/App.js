import React, { Component } from 'react';
import './App.css';
import Layout from './containers/layout/Layout'; 
import { BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
class App extends Component {
  render() {
    // const Index = () => <h2>Home</h2>;
    return (
      <BrowserRouter>
        {/* <Content /> */}
        <Layout />
      </BrowserRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>

      //   <Router>
      //     <div>
      //       <nav>
      //         <ul>
      //           <li>
      //             <Link to="/">Home</Link>
      //           </li>
      //           {/* <li>
      //             <Link to="/about/">About</Link>
      //           </li>
      //           <li>
      //             <Link to="/users/">Users</Link>
      //           </li> */}
      //         </ul>
      //       </nav>

      //       <Route path="/" exact component={Index} />
      //       {/* <Route path="/about/" component={About} />
      //       <Route path="/users/" component={Users} /> */}
      //     </div>
      //   </Router>
      // </div>
    );
  }
}

export default App;
