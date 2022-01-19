import {initializeApp} from 'firebase/app'
import {getStorage, ref} from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAGRMLWFTl-0DQHHlIxnIjN_a6GNpif0hg',
  authDomain: 'uidotdev.firebaseapp.com',
  projectId: 'uidotdev',
  storageBucket: 'uidotdev.appspot.com',
  messagingSenderId: '81744892142',
  appId: '1:81744892142:web:45d575da2b937cb65863ff',
  measurementId: 'G-53NVB3375M',
}
const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)
export {ref}
