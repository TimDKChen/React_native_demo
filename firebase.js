import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
} from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyA-qP1I2aMKbt2NKmqpHZujLc5AytlEjmg",
    authDomain: "my-places-338213.firebaseapp.com",
    projectId: "my-places-338213",
    storageBucket: "my-places-338213.appspot.com",
    messagingSenderId: "131550437699",
    appId: "1:131550437699:web:5d2c0d07db27d8f1a04ff6",
    measurementId: "G-1E4KZ7Z3HP"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);

// collection ref
const colRef = collection(db, 'orders');

// get collection data
// getDocs(colRef).then((snapshot) => {
//     console.log(snapshot.docs);
//     let orders = [];
//     snapshot.docs.forEach((doc) => {
//         orders.push({ ...doc.data(), id: doc.id }); 
//     });
//     console.log(orders);
// }).catch(err => {
//     console.log('Firebase error');
// });

// add documents
// addDoc(colRef, {
//     items: [1, 2],
//     restaurantName: "Sample restaurant",
// }).then(() => {
//     console.log("Insert data");
// });
export { db, colRef };

// delete documents
// const docRef = doc(db, 'orders', 'some id');

// deleteDoc(docRef).then();