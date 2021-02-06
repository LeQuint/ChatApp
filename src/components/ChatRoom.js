import SendMessage from './SendMessage';
import ChatSidebar from './ChatSidebar';
import ChatMessages from './ChatMessages';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import socketIOClient from "socket.io-client";
import { useStore } from './Store';

//const ENDPOINT = "http://localhost:3000/"
const ENDPOINT = "https://rocky-crag-78481.herokuapp.com/";

function ChatRoom() {
    const socket = socketIOClient(ENDPOINT);
    const [state,] = useStore();

    useEffect(() => {
        socket.emit("joinRoom", {username: state.username, room: state.room});
        return () => {
            socket.close();
        }
    }, []);

    return (
      <div class="chat-container">
        <header class="chat-header">
          <h1>ChatApp</h1>
          <Link to='/'>
            <button class="btn">Leave Room</button>
          </Link>
        </header>
        <main class="chat-main">
          <ChatSidebar socket={socket}/>
          <ChatMessages socket={socket}/>
        </main>
        <SendMessage socket={socket}/>
      </div>
    );
}

export default ChatRoom;