import React from 'react'; //ReactNative renders to mobile phone
import ReactDOM from 'react-dom';
import './index.css';
//import CardList from './CardList'; //Cards.JS is default export no need for {} //import Card from './Card';
import App from './Containers/App'; //Father to house all components
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { robots } from './robots'; //Robot.js is usinng export and not default export will need {}

//--------------------------------------------------------------------------------------------------

// //Method #1: Rendering 3 times:
// //I want to render whatever the below is:
// //Components "Card" have been created and added to div many times
// //Props e.g. {} needs to be added to differentiate the components
// ReactDOM.render(
//                 <div>
//                     <Card id={robots[0].id} name={robots[0].name}  email={robots[0].email}/>
//                     <Card id={robots[1].id} name={robots[1].name}  email={robots[1].email}/>
//                     <Card id={robots[2].id} name={robots[2].name}  email={robots[2].email}/>
//                 </div>
// , document.getElementById('root'));

// reportWebVitals();
//-----------------------------------------------------------------------------------------------

// //Method #2: Rendering 1 time which is better than method 1:
// //I want to render whatever the below is:
// //Props e.g. {} needs to be added to differentiate the components
// ReactDOM.render(
//         <CardList robots={robots}/>
// , document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//----------------------------------------------------------------------------------------------------

//Method #3 use this when there is more than 1 component to render e.g. image, drop box and header:
ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();