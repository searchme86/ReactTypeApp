import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { firestore } from '../lib/controller';
// import { NewHotelType } from '../Types/hotels';

function Details() {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});

  // Fetch a single document
  // access a document
  const getHotel = doc(firestore, `hotels/${id}`);

  useEffect(() => {
    const fetchHotelData = async () => {
      // get access to the document reference
      const docSnap = await getDoc(getHotel);
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setHotel(newHotelObj);
      } else {
        //doc.data() will be undefined in this case
        console.log('No such document');
      }
    };

    fetchHotelData();
  }, []);

  console.log('id', id);
  console.log('hotel', hotel);
  return <div>detail</div>;
}

export default Details;
