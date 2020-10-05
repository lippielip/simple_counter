import firebase from 'firebase'; 
import {ErrorAlert, SuccessAlert} from '../utils/alerts';

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

 export async function getData() {
    return await firebase.database().ref('/count').once('value').then( async function(snapshot) {
      return await snapshot.val()
    });
    ;
  }
  
  export async function writeData(setState) {
    let currentCount = await getData()
    setState({
      count: currentCount + 1 ,
      date: new Date()
    });
    updateData(currentCount);
  }

  export async function updateData(currentCount) {
    return firebase.database().ref('/').update({
        count: currentCount + 1
      }, function(error) {
        if (error) {
          ErrorAlert();
        } else {
          SuccessAlert();
        }
      });
  }