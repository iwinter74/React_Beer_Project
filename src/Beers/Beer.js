import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Beer extends Component {
    state = { 

    }
    componentDidMount() {
        fetch('http://ih-beers-api2.herokuapp.com/beers')
  .then(response => response.json())
  .then(json => console.log(json))
    }
    render() { 
        return (<div id="all">
            <img src="https://img.grouponcdn.com/deal/3vkYDuBY9RtJGLpSVaEoACTcmnkp/3v-2008x1204/v1/c700x420.jpg" alt="" />
           <Link class="btn" to="/beers">All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eligendi.</p>
            <img src="https://manofmany.com/wp-content/uploads/2020/03/Beers-Just-Got-a-Little-More-Expensive-1.jpg" alt="" />
            <Link class="btn" to="/randombeer">Random beers</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio rem maiores ea iusto!</p>
        </div> );
    }
}
 
export default Beer;