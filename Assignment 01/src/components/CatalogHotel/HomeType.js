import React from "react";
import './HomeType.css';

const dataHomeTypes = [
    {
        "name": "Hotels",
        "count": 233,
        "image": "./images/type_1.jpg"
    },
    {
        "name": "Apartments",
        "count": 2331,
        "image": "./images/type_2.jpg"
    },
    {
        "name": "Resorts",
        "count": 2331,
        "image": "./images/type_3.jpg"
    },
    {
        "name": "Villas",
        "count": 2331,
        "image": "./images/type_4.jpg"
    },
    {
        "name": "Cabins",
        "count": 2331,
        "image": "./images/type_5.jpg"
    }
];

const HomeType = () => {
   return ( <div className="container-home">
        <h2>Browse by property type</h2>
        <div className="container-home-type">
        {dataHomeTypes.map((item , index) => (
            <div className="home-type_item" key={index}>
                <img src={item.image}/>
                <h3>{item.name}</h3>
                <p>{item.count}</p>
            </div>
        ))}
        </div>
    </div>);
}
export default HomeType;