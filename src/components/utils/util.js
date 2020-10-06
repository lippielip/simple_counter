import firebase from 'firebase/app';
import 'firebase/database';
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

export function updateCount (currentCount) {
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

export function updateStats (state) {
	//console.dir(state);
}

export function writeData (setState, state) {
	let currentCount = state.count + 1;
	setState({
		count: currentCount,
		date: Date.now()
	});

	updateCount(currentCount);
	updateStats(state);

	return currentCount;
}

export async function getIp () {
	try {
		let response = await fetch('https://api.ipify.org?format=json').catch(function (error) {
			throw error;
		});
		let address = await response.json();
		address = address.ip;
		return address;
	} catch (error) {
		return 'unknown';
	}
}

export async function getCountry () {
	let ip = await getIp();
	try {
		let response = await fetch(`https://freegeoip.app/json/${ip}`).catch(function () {
			throw Error('HTTP Resource does not work on localhost Serviceworker');
		});
		let location = await response.json();
		location = location['country_name'];
		return location;
	} catch (error) {
		return 'unknown';
	}
}

export function getDomain () {
	let previousURL = document.referrer;
	if (previousURL.length > 0) {
		let a = document.createElement('a');
		a.setAttribute('href', previousURL);
		return a.hostname;
	} else {
		return 'direct access';
	}
}
