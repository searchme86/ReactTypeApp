import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { firestore } from '../lib/controller';
import Information from './Information';
// import { NewHotelType } from '../Types/hotels';

function Details() {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [isLoading, setLoading] = useState(false);

  // Fetch a single document
  // access a document
  const getHotel = doc(firestore, `hotels/${id}`);

  useEffect(() => {
    // firebase database에 저장된 doc 데이터를 가져오는
    const fetchHotelData = async () => {
      setLoading(true);
      // get access to the document reference
      const docSnap = await getDoc(getHotel);
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setHotel(newHotelObj);
        setLoading(false);
      } else {
        //doc.data() will be undefined in this case
        console.log('No such document');
      }
    };

    fetchHotelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('id', id);
  console.log('hotel', hotel);
  if (isLoading) return <div className="loading" />;
  return (
    <div className="hotel-details">
      {Object.keys(hotel) && Object.keys(hotel).length ? (
        <Information hotel={hotel} detailsPage />
      ) : null}
    </div>
  );
}

export default Details;
