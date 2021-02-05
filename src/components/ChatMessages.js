import { 
    useState, 
    useRef, 
} from "react";


function ChatMessages(props) {
    const [messages, addMessage]  = useState([]);
    const chatMessageContainer = useRef(null);

    const socket = props.socket;
    socket.once("chatMessage", (msg) => {
        console.log(`added ${msg.text} to message board`);
        addMessage(messages => [...messages, msg]);
        chatMessageContainer.current.scrollIntoView({ behavior: "smooth" });
    });

    socket.once('message', message => {
        const msg = {text: message}
        addMessage(messages => [...messages, msg]);
    });

    const displayMsg = messages.map((msg) => 
        <div class="message">
            <p class="meta">{msg.user}<span> {msg.time}</span></p>
            <p class="text"> {msg.text} </p>
        </div>
    );

    return (
        <div class="chat-messages">
            {displayMsg}
            <div style={{ float:"left", clear: "both" }}
                ref={chatMessageContainer}>
            </div>
        </div>
    );
}

export default ChatMessages;