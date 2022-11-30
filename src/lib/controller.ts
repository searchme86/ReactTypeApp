import { collection, getFirestore } from 'firebase/firestore';
import { app } from './Firebase';

// firebase에 지정한 데이터베이스, hotels에 접근하기 위해
// 글로벌하게 접근하도록 셋팅함
export const firestore = getFirestore(app);

//Hotels collection
// hotels 라고 컬렉션 이름을 지정함
export const hotelCollection = collection(firestore, 'hotels');
