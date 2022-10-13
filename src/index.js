// ALL IMPORTS
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, doc, onSnapshot,
  addDoc,
  query, where,
  orderBy, Timestamp
 } from "firebase/firestore";
// FIREBASE CONFIG INCLUDING THE API KEY
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
export class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = colRef;
    this.unsub;
  }
  //  Adding a new chat document to the chat collection in the firebase store
  async addChat(message){
    // using the addDoc method imported from firebase library
    const now = new Date();
      await addDoc(colRef, {
        // Format of a chat object
        message: message,
        username: this.username,
        room: this.room,
        created_at: Timestamp.fromDate(now)
        // created_at: Timestamp.now() ==== This would also work as the above
      })
    // saving the chat document
    const response = this.addChat; 
    return response;
  }
  //getting the chats from the chat collection in the firebase store
  getChats(callback){
    // Setting up the query
    const q = query(colRef, where('room', '==', this.room), orderBy('created_at', 'asc'));
    // setting  up a real-time listener for the chats collection using the onSnapshot method
    this.unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added"){
          // UPDATE UI here...
          callback(change.doc.data());
          // console.log(change.doc.data());
        }
      })
    })
  }
  //update the user name in the UI
  updateName(username){
    // Updating the username
    this.username = username;
    localStorage.setItem('username', username);
  }
  //update the room in the UI
  updateRoom(room){
    // Updating the room
    this.room = room;
    console.log('chatroom updated!');
    if(this.unsub){
      this.unsub();
    }
  }
}
