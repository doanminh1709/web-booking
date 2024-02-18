import React from "react";
import './DetailHotel.css';

const detailHotels = [{
    "name": "Tower Street Apartments",
    "address": "Elton St 125 New york",
    "distance": "Excellent location - 500m from center",
    "price": "Book a stay over $114 at this property and get a free airport taxi",
    "photos": [
        "./images/hotel_detail_1.jpg",
        "./images/hotel_detail_2.jpg",
        "./images/hotel_detail_3.jpg",
        "./images/hotel_detail_4.jpg",
        "./images/hotel_detail_5.jpg",
        "./images/hotel_detail_6.jpg"
    ],
    "title": "Stay in the heart of City",
    "description": "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    "nine_night_price": 955
}];

const DetailHotel = () => {
    return (
        <div className="container-detail_hotel">
            {detailHotels.map((item, index) => (
                <div key={index} className="container-item-detail_hotel">
                    <div className="box-item-detail_hotel">
                        <h2>{item.name}</h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                    <div className="tag-detail-hotel">
                        <i className="fa-solid fa-location-dot">{item.address}</i>
                        <p>{item.distance}</p>
                        <strong>{item.price}</strong>
                    </div>
                    <div className="image-detail_hotel">
                        {item.photos.map((detailItem, index) => (
                            <img src={detailItem} key={index} />
                        ))}
                    </div>
                    <div className="title-detail-hotel">
                        <div className="first-title-detail-hotel">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="second-title-detail-hotel">
                            <p className="rate-detail_text">Perfect for a 9-night stay!</p>
                            <p className="location-detail_text">Located in the real hear of Krakow , this property has an excellent location score of 9.8!</p>
                            <strong>${item.nine_night_price} <p>(9 nights)</p></strong>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DetailHotel;