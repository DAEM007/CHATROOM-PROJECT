import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, onSnapshot,
  addDoc,
  query,
  orderBy, serverTimestamp
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl17u7Ro-0W-ikrlL98U9W3fUyuIGJbNM",
  authDomain: "chatroom-project-983d3.firebaseapp.com",
  projectId: "chatroom-project-983d3",
  storageBucket: "chatroom-project-983d3.appspot.com",
  messagingSenderId: "461460564966",
  appId: "1:461460564966:web:f37b84ed6b8892dfe4c427"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// init collection reference
const colRef = collection(db, 'chats');

// Queries
const q = query(colRef, orderBy('createdAt'));

// Setting up a real-time listener to get new chats
onSnapshot(q, (snapshot) => {
  let chats = [];
  snapshot.docs.forEach((doc) => {
    chats.push({ ...doc.data(), id: doc.id })
  })
  console.log(chats);
});




// CLASS OF CHATROOM
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = colRef;
  }
  //  Adding a new chat document to the chat collection
  async addChat(message){
    // const addChatForm = document.querySelector('.new-chat');
    // addChatForm.addEventListener('submit', e => {
    //   e.preventDefault();

      addDoc(colRef, {
        // Format of a chat
        // message: addChatForm.id.value,
        message: message,
        username: this.username,
        room: this.room,
        created_at: serverTimestamp()
      })
      // .then(() => {
      //   addChatForm.reset();
      // })
      // .catch((err) => {
      //   console.log(err.message);
      // })
    // })

    // saving the chat document
    const response = this.addChat; 
    return response;
  }

}

const chatroom = new Chatroom ('gaming', 'Da vinci');
// console.log(chatroom);


chatroom.addChat('hello humans')
  .then(() => {
    console.log('chat added');
  })
  .catch((err) => {
    console.log(err.message);
  })



// Updating the username

// Updating the room