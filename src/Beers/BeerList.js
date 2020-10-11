import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BeerList extends Component {
    state = {
        data: [],

    }
    componentDidMount() {
        fetch('http://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ data: json });
                console.log(this.state.data)
            })
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1200px-Facebook_Home_logo.svg.png" alt="" />
                </Link>
                <section class="container">
                    {this.state.data.map(elt =>
                        <div key={elt._id} >
                            <img src={elt.image_url} alt="" className="beer" />
                            <div>
                                <h1>{elt.name}</h1>
                                <p>{elt.tagline}</p>
                                <p>{elt.contributed_by}</p>
                                <Link to={`/beers/${elt._id}`} class="btn list">Read more</Link>

                            </div>

                        </div>,



                    )}


                </section>
            </div>
        );
    }
}

export default BeerList;