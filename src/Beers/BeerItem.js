import React from 'react';

const BeerItem = (props) => {
    return (
        <div>
              <img className="random_beer" src={props.image_url} alt=""></img>
                            <h3>{props.name}</h3>
                            <p>{props.tagline}</p>
                            <p>{props.first_brewed}</p>
                            <p>{props.attenuation_level}</p>
                            <p>{props.description}</p>
                            <h6>{props.contributed_by}</h6>
        </div>
    )
}
export default BeerItem;