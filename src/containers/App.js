// Deleted Component import here (no longer needed with Hooks):
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots'; // old method
import './App.css';

// Changed to function rather than "class App extends Component". "Hooks don't work inside classes – they let you use React without classes":
function App() {
    // Version one class syntax:
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    // No such thing as componentDidMount inside of a function, so this is no longer needed (this came from the imported Component class in version one):
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }));
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
            // console.log(robots,searchfield) 
    }, [])

    // This becomes a variable in version two:
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    // render no longer needed:
    // render() {
    // next line no longer needed, because we no longer have a state object:
    // const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    // console.log(robots,searchfield)
    return !robots.length ?
    <h1>Loading</h1> :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            {/* No longer need "this" keyword with Hooks: */}
            {/* <SearchBox searchChange={this.onSearchChange} /> */}
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
