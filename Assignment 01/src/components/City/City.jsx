import React from "react";
import './City.css';

const dataCities = [
    {
        "name": "Dublin",
        "subText": "123 properties",
        "image": "./images/city_1.webp"
    },
    {
        "name": "Reno",
        "subText": "533 properties",
        "image": "./images/city_2.webp"
    },
    {
        "name": "Austin",
        "subText": "532 properties",
        "image": "./images/city_3.webp"
    }
];

const City = () => {
    return (
        <div className="container-city_box">
            {dataCities.map((item , index) => (
                <div key={index} className="city-box_item">
                    <img src={item.image}></img>
                    <h1>{item.name}</h1>
                    <p>{item.subText}</p>
                </div>
            ))}
        </div>
    );
};

export default City;

