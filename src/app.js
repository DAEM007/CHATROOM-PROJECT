// ALL IMPORTS
import { Chatroom } from "./index";
import { ChatUI } from "./ui";
// DOM QUERIES
const chatList = document.querySelector('.chat-list');

// CLASS INSTANCES
const chatUI = new ChatUI (chatList);
const chatroom = new Chatroom ('ninjas', 'Naruto');

// GET CHATS AND RENDER
chatroom.getChats((data) => {
  chatUI.render(data);
})


