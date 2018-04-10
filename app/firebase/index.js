import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyD7tLYwG8j1U6DL1QNAfmek0BniXx8u8Yw",
		authDomain: "react-todo-app-5ef4e.firebaseapp.com",
		databaseURL: "https://react-todo-app-5ef4e.firebaseio.com",
		projectId: "react-todo-app-5ef4e",
		storageBucket: "react-todo-app-5ef4e.appspot.com",
		messagingSenderId: "252851626089"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;