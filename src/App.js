import React from 'react';
//import logo from './logo.svg';
import './App.css';

import DataProvider from "./DataProvider";
import Form from "./Form";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
const App = () => (
  <DataProvider endpoint="http://localhost:9300/journey/hubtel-gh/survey?type=unpopulated" 
                render={data => <Form data={data} />} />
);

export default App;
