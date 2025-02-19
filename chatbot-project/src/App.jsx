import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'





function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: "hello chatbot",
    sender: "user",
    id: "id1"
  }, {
    message: "how can i assist you?",
    sender: "robot",
    id: "id2"
  }]);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];


  return (
    <div className = "app-container">
      
      <ChatMessages 
        chatMessages = {chatMessages}
      />

      <ChatInput 
        setChatMessages = {setChatMessages}
        chatMessages = {chatMessages}
      />
    </div>
  );
}

export default App
