import { 
    useRef,
} from "react";
import { useStore } from "./Store";

const moment = require("moment");

function SendMessage(props) {
    const socket = props.socket;
    const msgInputRef = useRef(null);
    const msgState = {};

    const [state, ] = useStore();

    const updateMessageState = (event) => {
        msgState.message = event.target.value;
    }

    const formatMessage = (user, msgText) => {
        return {
            user: user,
            time: moment().format("h:mm a"),
            text: msgText
        }
    }

    const sendMessageHandler = (e) => {
        e.preventDefault();
        if (msgState.message && socket) {
            socket.emit("chatMessage", formatMessage(state.username, msgState.message));
            msgState.message = "";
            msgInputRef.current.value = "";
            msgInputRef.current.focus();
        }
    }

    return (
        <div class="chat-form-container">
            <form id="chat-form">
                <input onChange={updateMessageState} type="text" required autocomplete="off" ref={msgInputRef}/>
                <button class="btn" onClick={sendMessageHandler}> Send</button>
            </form>
        </div>
    );
}

export default SendMessage;