import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection
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

// auliualiua



// CLASS SCRIPT
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = colRef;
  }
  async addChat(message){
    // format of a chat object
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room
      // created_At: 
    };
    // saving the chat document
    const response =  this.chats.add(chat);
    return response;
  }
}




const chatroom = new Chatroom ('gaming', 'Da vinci');

chatroom.addChat('hello everyone')
  .then(() => {
    console.log('chat added');
  })
  .catch((err) => {
    console.log(err.message);
  })



// Adding new chat documents to the chat collection

// Setting up a real-time listener to get new chats

// Updating the username

// Updating the room