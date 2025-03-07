import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig.js"
import { getFirestore } from "firebase/firestore"
import router from "./router/index.js"


createApp(App).use(router).mount('#app')
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }