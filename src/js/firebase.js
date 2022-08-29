import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    AuthErrorCodes,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
// Modal for authorisation

const modalOpen = document.querySelector('.modal-open');
const modalBox = document.querySelector('.modal-authent__box');
const btnAuth = document.querySelector('.auth_btn'); 
const closeBtn = document.querySelector('.auth-modal-close');

btnAuth.addEventListener('click', (e) => {
    e.preventDefault();
    modalOpen.classList.add('active');
    modalBox.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modalOpen.classList.remove('active');
    modalBox.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === modalOpen) {
        modalOpen.classList.remove('active');
        modalBox.classList.remove('active');
    }
});

// Authorication script

const firebaseConfig = {
  apiKey: "AIzaSyAOAAbZA3RU8RhMKF_OMDcBQlQNDXUrEUg",
  authDomain: "filmoteka-team-js-project.firebaseapp.com",
  databaseURL: "https://filmoteka-team-js-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-team-js-project",
  storageBucket: "filmoteka-team-js-project.appspot.com",
  messagingSenderId: "48080784167",
  appId: "1:48080784167:web:4008dc2d03d12f778e7702",
  measurementId: "G-T8P7HD6DV7"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const createAccount = async () => {
    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;
    console.log(loginEmail);
    console.log(loginPassword);
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
};

const registerBtn = document.querySelector('#registerBtn');
registerBtn.addEventListener('click', createAccount);

const logInUser = async () => {
    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;
    console.log(loginEmail);
    console.log(loginPassword);
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        hideLogInError();
        showUserState();
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        showEmailError(error);
        showPasswordError(error);
    }
};

const logInBtn = document.querySelector('#logInBtn');
logInBtn.addEventListener('click', logInUser);

//LogIn mistake
const emailWarningMessage = document.querySelector('.warning-message__email')
const passwordWarningMessage = document.querySelector('.warning-message__password');
const hideLogInError = () => {
    emailWarningMessage.style.display = 'none';
    emailWarningMessage.innerHTML = '';
    passwordWarningMessage.style.display = 'none';
    passwordWarningMessage.innerHTML = '';
};
const showEmailError = (error) => {
    emailWarningMessage.style.display = 'inline-block';
    if (error.code === AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE) {
        emailWarningMessage.innerHTML = 'That email already in use.';
    } else {
        emailWarningMessage.innerHTML = `Error: ${error.message}`;
    };
};

const showPasswordError = (error) => {
    passwordWarningMessage.style.display = 'inline-block';
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        passwordWarningMessage.innerHTML = 'Wrong password. Try again, please.';
    } else {
        passwordWarningMessage.innerHTML = `Error: ${error.message}`;
    };
}

const authState = document.querySelector('.authStatus');
const registrationBlock = document.querySelector('.registration')

const showUserState = () => {
    const loginEmail = document.getElementById('email').value;
    registrationBlock.classList.add('visually-hidden');
    authState.classList.remove('visually-hidden');
    authState.innerHTML = `You are logged in as ${loginEmail}`;
};

hideLogInError();

//Authentication status
const logOutBtn = document.querySelector('.logOutBtn');
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
        } else {

        };
    })
};
monitorAuthState();

const logOut = async () => {
    await signOut(auth);
};

logOutBtn.addEventListener('click', logOut)

