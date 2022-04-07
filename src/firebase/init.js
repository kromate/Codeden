
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
	apiKey: process.env.FIRE_API_KEY,
	authDomain: 'timelinx.firebaseapp.com',
	projectId: 'timelinx',
	storageBucket: 'timelinx.appspot.com',
	messagingSenderId: '104278527964',
	appId: '1:104278527964:web:5bc248cc1d3288e5218919'
};


export const app = initializeApp(firebaseConfig);
