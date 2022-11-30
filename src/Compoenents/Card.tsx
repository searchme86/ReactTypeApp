import React, { useEffect, useState } from 'react';
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { hotelCollection } from '../lib/controller';
import { NewHotelType } from '../Types/hotels';
import Information from './Information';

function Card() {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);

  useEffect(
    () =>
      onSnapshot(hotelCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          // console.log('snapshot', snapshot);
          snapshot.docs.map((doc) => {
            // console.log('doc', doc)
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  console.log('hotels', hotels);
  return (
    <div className="card">
      <h2 className="title">All Hotels</h2>
      {hotels && hotels.length ? (
        <div>
          {hotels.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. please add one</h2>
      )}
    </div>
  );
}

export default Card;
