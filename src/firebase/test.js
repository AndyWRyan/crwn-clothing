import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('6NuW48ZN4bDsQORkzeLr').collection('cartItems').doc('A8ixdLm73OuvvG9g5KGM');

firestore.doc('users/6NuW48ZN4bDsQORkzeLr/cartItems/A8ixdLm73OuvvG9g5KGM');

firestore.collection('users/6NuW48ZN4bDsQORkzeLr/cartItems');
