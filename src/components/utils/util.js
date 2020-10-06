import firebase from 'firebase';
import { ErrorAlert, SuccessAlert } from '../utils/alerts';

var firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function getData (setState) {
	firebase.database().ref('/count').on('value', function (snapshot) {
		setState({
			count: snapshot.val()
		});
	});
}

export async function writeData (setState, state) {
	let currentCount = state.count + 1;
	setState({
		count: currentCount,
		date: new Date()
	});

	updateCount(currentCount);
	updateStats(state);

	return currentCount;
}

export async function updateStats (state) {
	//console.dir(state);
}

export async function updateCount (currentCount) {
	return firebase.database().ref('/').update({
		count: currentCount
	}, function (error) {
		if (error) {
			ErrorAlert();
		} else {
			SuccessAlert();
		}
	});
}

export async function getIp () {
	let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'
		}
	});
	let address = await response.json();
	address = await address.ip;
	return address;
}

export async function getCountry () {
	let ip = await getIp();

	let response = await fetch(`https://cors-anywhere.herokuapp.com/http://ip-api.com/json/${ip}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'
		}
	});
	let location = await response.json();
	location = location.country;
	return location;
}
