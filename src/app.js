// ALL IMPORTS
import { Chatroom } from "./index";
import { ChatUI } from "./ui";

// DOM QUERIES
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// ADDING NEW CHATS TO BE DISPLAYED IN THE UI
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    })

});

// CLASS INSTANCES
const chatUI = new ChatUI (chatList);
const chatroom = new Chatroom ('ninjas', 'Naruto');

// GET CHATS AND RENDER
chatroom.getChats((data) => {
  chatUI.render(data);
})


