import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// Modal for authorisation

const modalOpen = document.querySelector('.modal-open');
const modalBox = document.querySelector('.modal-authent__box');
const btnAuth = document.querySelector('.auth_btn');
const closeBtn = document.querySelector('.auth-modal-close');

let ifOpen = '';

if (!ifOpen) {
  document.removeEventListener('click', closeByEsc);
}

btnAuth.addEventListener('click', e => {
  e.preventDefault();
  modalOpen.classList.add('activeAuth');
  modalBox.classList.add('activeAuth');
  ifOpen = true;
  if (ifOpen) {
    document.addEventListener('keydown', closeByEsc);
  }
});

closeBtn.addEventListener('click', () => {
  modalOpen.classList.remove('activeAuth');
  modalBox.classList.remove('activeAuth');
});

document.addEventListener('click', e => {
  if (e.target === modalOpen) {
    modalOpen.classList.remove('activeAuth');
    modalBox.classList.remove('activeAuth');
  }
});

function closeByEsc(e) {
  if (e.code === 'Escape') {
    console.log(e.code);
    modalOpen.classList.remove('active');
    modalBox.classList.remove('active');
  }
}
document.addEventListener('keydown', closeByEsc);

// Authorisation script
const firebaseConfig = {
  apiKey: 'AIzaSyAOAAbZA3RU8RhMKF_OMDcBQlQNDXUrEUg',
  authDomain: 'filmoteka-team-js-project.firebaseapp.com',
  databaseURL:
    'https://filmoteka-team-js-project-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-team-js-project',
  storageBucket: 'filmoteka-team-js-project.appspot.com',
  messagingSenderId: '48080784167',
  appId: '1:48080784167:web:4008dc2d03d12f778e7702',
  measurementId: 'G-T8P7HD6DV7',
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      showUserState();
    } else {
      showLoginForm();
    }
  });
};
monitorAuthState();

const createAccount = async () => {
  const loginEmail = document.getElementById('email').value;
  const loginPassword = document.getElementById('password').value;

  try {
    await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    hideLogInError();
    showUserState();
  } catch (error) {
    showAuthError(error);
  }

};

const registerBtn = document.querySelector('#registerBtn');
registerBtn.addEventListener('click', createAccount);

const logInUser = async () => {
  const loginEmail = document.getElementById('email').value;
  const loginPassword = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    hideLogInError();
    showUserState();
  } catch (error) {
    showAuthError(error);
  }
};

const logInBtn = document.querySelector('#logInBtn');
logInBtn.addEventListener('click', logInUser);

//LogIn mistake
const emailWarningMessage = document.querySelector('.warning-message__email');
const passwordWarningMessage = document.querySelector(
  '.warning-message__password'
);
const hideLogInError = () => {
  // emailWarningMessage.style.display = 'none';
  emailWarningMessage.innerHTML = '';
  // passwordWarningMessage.style.display = 'none';
  passwordWarningMessage.innerHTML = '';
};

const showAuthError = error => {
  const loginPassword = document.getElementById('password').value;
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    emailWarningMessage.style.display = 'inline-block';
    emailWarningMessage.innerHTML =
      'The email address is already in use by another account.';
  } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
    emailWarningMessage.style.display = 'inline-block';
    emailWarningMessage.innerHTML = 'The email address is badly formatted.';
  } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    passwordWarningMessage.style.display = 'inline-block';
    passwordWarningMessage.innerHTML = 'Wrong password. Try again, please.';
  } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
    passwordWarningMessage.style.display = 'inline-block';
    passwordWarningMessage.innerHTML =
      'Password must be at least 6 characters long.';
  } else if (loginPassword.trim() === '') {
    passwordWarningMessage.style.display = 'inline-block';
    passwordWarningMessage.innerHTML = 'Password is required to Sign Up/LogIn.';
  } else {
    emailWarningMessage.style.display = 'inline-block';
    emailWarningMessage.innerHTML = 'Something went wrong. Try again, please!';
  }
};

const authState = document.querySelector('.authStatus');
const registrationBlock = document.querySelector('.registration');
const loggedInMessage = document.querySelector('.loggedInMessage');
const logOutBtn = document.getElementById('logOutBtn');

const showUserState = () => {
  const loginEmail = document.getElementById('email').value;
  registrationBlock.classList.add('visually-hidden');
  btnAuth.classList.add('visually-hidden');
  logOutBtn.classList.remove('visually-hidden');
  authState.classList.remove('visually-hidden');
  loggedInMessage.innerHTML = `You are logged in as <b>${loginEmail}</b>`;
};
const showLoginForm = () => {
  registrationBlock.classList.remove('visually-hidden');
  btnAuth.classList.remove('visually-hidden');
  logOutBtn.classList.add('visually-hidden');
  authState.classList.add('visually-hidden');
};
hideLogInError();

//Authentication status

const logOut = async () => {
  await signOut(auth);
};

logOutBtn.addEventListener('click', logOut);
