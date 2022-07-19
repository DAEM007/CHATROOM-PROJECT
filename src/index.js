import { initializeApp, onLog } from "firebase/app";
import { 
  getFirestore, collection, doc, onSnapshot,
  addDoc,
  query, where,
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


// CLASS OF CHATROOM
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = colRef;
  }
  //  Adding a new chat document to the chat collection
  async addChat(message){
    // using the addDoc method imported from firebase library
      addDoc(colRef, {
        // Format of a chat
        message: message,
        username: this.username,
        room: this.room,
        created_at: serverTimestamp()
      })
    // saving the chat document
    const response = this.addChat; 
    return response;
  }
  getChats(callback){
    // Setting up the query
    const q = query(colRef, where('room', '==', this.room), orderBy('created_at', 'desc'));
    // setting  up a real-time listener for the chats collection using the onSnapshot method
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added"){
          // UPDATE UI here...
          callback(change.doc.data());
          // console.log(change.doc.data());
        }
      })
    })
  }
  updateName(username){
    this.username = username;
  }
}

const chatroom = new Chatroom ('ninjas');

// chatroom.addChat('Yo! Anyone listened to all time low')
// You can then add your then/catch methods here...

chatroom.getChats((data) => {
  console.log(data);
});



// Updating the username

// Updating the room