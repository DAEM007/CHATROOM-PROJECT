// ALL IMPORTS
import { Chatroom } from "./index";
import { ChatUI } from "./ui";

// DOM QUERIES
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

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

// UPDATING USERNAME TO BE DISPLAYED IN THE UI
newNameForm.addEventListener('submit', e => {
  e.preventDefault();

  // update name via the chatroom class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the updated name as a mssg for a few secs...
  updateMssg.innerText = `Your name was updated to ${newName}`;

});

// CLASS INSTANCES
const chatUI = new ChatUI (chatList);
const chatroom = new Chatroom ('ninjas', 'Naruto');

// GET CHATS AND RENDER
chatroom.getChats((data) => {
  chatUI.render(data);
})


