import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";

const App1 = () => {
    const [data, setData] = useState([{
        id: 0,
        name: "",
        username: "",
        email: ""
    }]);
    // const [robot, setRobotes] = useState([{}]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { 
                setData(users);
                // setRobotes(users); 
            });
    },[]);
    let robo=data;
    const onSearchChange = (event) => {    
        console.log(robo);
        const robots = robo.filter(robot => {
            return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
        }
        );
        setData(robots);
    }   
    return !data.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'> RoboFriends </h1>        
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                <CardList robots={data} />
                </Scroll>
            </div>
        );
}
export default App1;