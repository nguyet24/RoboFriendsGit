import React, { Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from'../Components/Scroll';
import SearchBox from '../Components/SearchBox';
//import { robots } from './robots';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry';

//We have our App component with two states: robots & searchfield
//Because App owns the STATE, any component that has STATE, uses the class syntax so they can use the contructor function.
//This state is the only thing that changes, it describes the APP
//The virtual DOM collects this entire STATE and Reacts uses this Entire STATE to render
//It basically passes them down as props to the beow component to render
class App extends Component{
    //Run the contructor with an empty array
    constructor() {
        super()
        this.state = {
            //Usually robots should be empty with []
            robots: [],
            searchfield:''
        }
    }

    componentDidMount() {
        //Fetch what ever the users are, its a windows browser and a tool for us to make requests to servers
        fetch('https://jsonplaceholder.typicode.com/users')
            // What until we get a response
            .then(response=> response.json())
            // Getting te users and updating them with set state
            .then(users => {this.setState({ robots:users })});
            // If we dont do anything an update with .then(users=>{}) then the page will return with no robots
            // Will only receive the robots one it UPDATES with componentDiMount
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
    }

    render(){
        //There is no s after robots, with filter where robots, means filter through the robots and iterate throught the robots
        //So taking the s off means each items is a robot user
        
        //Add below to clean up
        const { robots, searchfield } = this.state;
        // After clean up  const filteredRobots = this.state.robots.filter(robot=>{
        const filteredRobots = robots.filter(robot=>{
           //before clean up
           // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
           // After clean up const { robots, searchfield } = this.state 
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //Putting this if statement to stop if there are no robots so this does not coninue to try to update
        // After clean up const { robots, searchfield } = this.state  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        ///if (this.state.robots.length === 0) {
        //After this all the .this.state have been removed but coz of repetotion did not put a comment
        // Removed "=== 0" from robots.length === 0 as code will do the same thing
        //if (!robots.length) { //If robots.lenght will turn this into false, the ! will turn it back to true
            return !robots.length?  // the above IF Else and return to make code cleaner
            <h1>Loading</h1> :
            //} else {
            //return (
            ( // added "(" due to the above if else is removed
                <div className='tc'>
                    <h1 className ='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            {/* All the lower case hmtl component do not need to be wrapped only the custom Upper components that we created. */}
                            <CardList robots={filteredRobots}/> 
                        </ErrorBoundry>
                    </Scroll>
                </div>
                );
            //}
    }
}

export default App;