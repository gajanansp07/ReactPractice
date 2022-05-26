import React, { useEffect, useState } from "react"
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";

const AppF=()=>{
    const [robots,setRobotes] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobotes(users);});
    },[]);

    const onSearchChange = (event) => {
        console.log(event.target.value);
        const Serchfield = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
      });
        setRobotes(Serchfield);
      }

    return !robots.length ?
      <h1>Loading...</h1> 
      :(<div className="tc">
        <h1>Test Card List</h1>
        <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={robots} />
          </Scroll>
    </div>);
}
export default AppF