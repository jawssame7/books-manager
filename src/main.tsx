import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import App from './App.tsx'

const firebaseConfig = {
  apiKey: 'AIzaSyDL4rfSI6cn50Aq0__UbzBBiow3Wg_vWIQ',
  authDomain: 'books-manager-a336e.firebaseapp.com',
  projectId: 'books-manager-a336e',
  storageBucket: 'books-manager-a336e.appspot.com',
  messagingSenderId: '516275590965',
  appId: '1:516275590965:web:0c6533c44bbdba03001e7c',
}

// @ts-ignore
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const storage = getStorage()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
