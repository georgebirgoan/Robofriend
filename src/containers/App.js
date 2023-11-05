import { Component } from "react";
import CardList from "../Components/CardList";
import { robots } from '../robots';
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll"
import ErrorBoundary from "../Components/ErrorBoundary";


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:''
        }
        console.log('constructor');
    }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users=>{this.setState({robots:users})});
   
}

 onSearchChange=(event)=>{
    this.setState({searchField:event.target.value})}

render(){
    const {robots,searchField}=this.state;
    const filterRobots=robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    console.log('render');
    return !robots.length ?
    <h1>LOADING</h1>:
    (
            <div className="tc bg-blue ">
                <h1 className="f1 tc light-blue">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filterRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }

    }
export default App;