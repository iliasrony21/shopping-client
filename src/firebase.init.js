// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuloU5WUS18oUE-MTkgC6I6ivD16CWwuU',
  authDomain: 'shopping-auth-f5ed6.firebaseapp.com',
  projectId: 'shopping-auth-f5ed6',
  storageBucket: 'shopping-auth-f5ed6.appspot.com',
  messagingSenderId: '903081612183',
  appId: '1:903081612183:web:d04022ae201c5d489e2ad2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
