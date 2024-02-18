import React from "react";
import './SearchListItem.css'
const dataSearchList = [
    {
        "name": "Tower Street Apartments",
        "distance": "500m",
        "tag": "Free airport taxi",
        "type": "Entire studio • 1 bathroom • 21m² 1 full bed",
        "description": "Studio Apartment with Air conditioning",
        "free_cancel": true,
        "price": 112,
        "rate": 8.9,
        "rate_text": "Excellent",
        "image_url": "./images/hotel_search_1.webp"
    },
    {
        "name": "Comfort Suites Airport",
        "distance": "200m",
        "tag": "Free Breakfast",
        "type": "Entire studio • 2 bathroom • 100m² 2 full bed",
        "description": "Studio Apartment",
        "free_cancel": true,
        "price": 140,
        "rate": 9.3,
        "rate_text": "Exceptional",
        "image_url": "./images/hotel_search_2.jpg"
    },
    {
        "name": "Four Seasons Hotel",
        "distance": "100m",
        "tag": "Free Parking",
        "type": "1 bathroom • 51m² 2 full bed",
        "description": "Hotel in Lisbon",
        "free_cancel": false,
        "price": 99,
        "rate": 8.8,
        "rate_text": "Excellent",
        "image_url": "./images/hotel_search_3.jpg"
    }
];
const detailInfoHotel = () =>{
   window.location.replace('http://localhost:3000/detail');
}
const SearchListItem = () => {
    return (
        <div className="container-search_list">
            {dataSearchList.map((item , index) => (
                <div className="container-box_item" key={index}>
                    <div className="box-img_item">
                        <img src={item.image_url} />
                    </div>
                    <div className="describe-info-item">
                        <h1>{item.name}</h1>
                        <p>{item.distance} from center</p>
                        <span>{item.tag}</span>
                        <strong>{item.description}</strong>
                        <p>{item.type}</p>
                            {item.free_cancel === true && (
                                <div className="cancellation-info">
                                    <strong>Free cancellation</strong>
                                    <p>You can cancel later, so lock in this great price today!</p>
                                </div>
                            )}
                    </div>
                    <div className="box-price-item">
                        <div className="rate-info_item">
                            <strong>{item.rate_text}</strong>
                            <span>{item.rate}</span>
                        </div>
                        <div className="info-cost">
                            <strong>${item.price}</strong>
                            <p>Includes taxes and fees</p>
                            <button onClick={detailInfoHotel}>See availability</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchListItem;