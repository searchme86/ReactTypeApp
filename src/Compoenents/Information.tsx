import React from 'react';
import { NewHotelType } from '../Types/hotels';
import { Link } from 'react-router-dom';

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

function Information({ hotel, detailsPage }: IProps) {
  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img className="location-image" src={hotel.location} alt="Hotel" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{hotel.title}</h2>
            <p className="region">{hotel.region}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">£{hotel.perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
