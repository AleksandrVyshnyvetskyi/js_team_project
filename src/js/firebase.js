// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'


// Modal for authorisation

const modalOpen = document.querySelector('.modal-open');
const modalBox = document.querySelector('.modal-dev__box ');
const btnAuth = document.querySelectorAll('.auth_btn'); 
const closeBtn = document.querySelector('.modal-close');

console.log(btnAuth);

// btnAuth.addEventListener('click', (e) => {
//     e.preventDefault();
//     modalOpen.classList.add('active');
//     modalBox.classList.add('active');
// });

// closeBtn.addEventListener('click',() => {
//     modalOpen.classList.remove('active');
//     modalBox.classList.remove('active');
// });

// document.addEventListener('click', (e) => {
//     if(e.target === modalOpen) {
//         modalOpen.classList.remove('active');
//         modalBox.classList.remove('active');
//     }
// });
// Authorisation script

// const firebaseConfig = {
//   apiKey: "AIzaSyAOAAbZA3RU8RhMKF_OMDcBQlQNDXUrEUg",
//   authDomain: "filmoteka-team-js-project.firebaseapp.com",
//   projectId: "filmoteka-team-js-project",
//   storageBucket: "filmoteka-team-js-project.appspot.com",
//   messagingSenderId: "48080784167",
//   appId: "1:48080784167:web:db61b804267a6c3c8e7702",
//   measurementId: "G-LG80QD4W41"
// };

// const app = initializeApp(firebaseConfig);
// const uiConfig = {
//         signInSuccessUrl: '<url-to-redirect-to-on-success>', // Waiting for complete modal link
//         signInOptions: [
//           // Leave the lines as is for the providers you want to offer your users.
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//           firebase.auth.GithubAuthProvider.PROVIDER_ID,
//           firebase.auth.EmailAuthProvider.PROVIDER_ID,
//           firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//           firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//         ],
// };

// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);