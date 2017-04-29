import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAH-SvzKNCI7KJO50z_F5keaemW-n9vVEM",
	authDomain: "diploma-project-d65cd.firebaseapp.com",
	databaseURL: "https://diploma-project-d65cd.firebaseio.com",
	projectId: "diploma-project-d65cd",
	storageBucket: "diploma-project-d65cd.appspot.com",
	messagingSenderId: "286137189009"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();