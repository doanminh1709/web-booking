import React from "react";
import './InfoHotel.css';

const hotels = [
    {
        "name": "Aparthotel Stare Miasto",
        "city": "Madrid",
        "price": 120,
        "rate": 8.9,
        "type": "Excellent",
        "image_url": "./images/hotel_1.webp"
    },
    {
        "name": "Comfort Suites Airport",
        "city": "Austin",
        "price": 140,
        "rate": 9.3,
        "type": "Exceptional",
        "image_url": "./images/hotel_2.jpg"
    },
    {
        "name": "Four Seasons Hotel",
        "city": "Lisbon",
        "price": 99,
        "rate": 8.8,
        "type": "Excellent",
        "image_url": "./images/hotel_3.jpg"
    },
    {
        "name": "Hilton Garden Inn",
        "city": "Berlin",
        "price": 105,
        "rate": 8.9,
        "type": "Excellent",
        "image_url": "./images/hotel_4.jpg"
    }
];

const InfoHotel = () => {
    return (
        <div className="container-detail_hotel">
            <h2>Homes guest love</h2>
            <div className="container-detail-box">
                {hotels.map((item, index) => (
                    <div key={index} className="container-detail-item_box">
                        <img src={item.image_url} />
                        <a>{item.name}</a>
                        <p>{item.city}</p>
                        <strong>Start from $ {item.price}</strong>
                        <span>{item.rate}</span>
                        <p className="item-type">{item.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoHotel;

