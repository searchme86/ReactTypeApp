import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  getFirestore,
} from 'firebase/firestore';
import { app } from './Firebase';
import { AddHotelType } from '../Types/hotels';

// firebase에 지정한 데이터베이스, hotels에 접근하기 위해
// 글로벌하게 접근하도록 셋팅함
export const firestore = getFirestore(app);

//Hotels collection
// hotels 라고 컬렉션 이름을 지정함
// HOTELS COLLECTION
export const hotelCollection = collection(firestore, 'hotels');

// ADD A New Document To my Collection
// hotelData : form에서 입력한 호텔 데이터
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelCollection, { ...hotelData });
  console.log(`new hotel created at ${newHotel.path}`);
};

//Delete a document in your collection
export const deleteHotel = async (id: string) => {
  const document = doc(firestore, `hotel/${id}`);
  await deleteDoc(document);
};
