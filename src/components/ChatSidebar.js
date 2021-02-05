import { useState } from "react";
import { useStore } from "./Store";

function ChatSidebar(props)  {
    const socket = props.socket;
    const [state, ] = useStore();
    const [users, setUsers] = useState([]);

    socket.on("usersInRoom", (oUsers) => {
        setUsers(oUsers);
    });

    const activeUsers = users.map(user => <li>{user}</li>);

    return (
        <div class="chat-sidebar">
            <h3><i class="fas fa-comments"></i> Room Name </h3>
            <h2 id="room-name">{state.room}</h2>
            <h3><i class="fas fa-users"></i> Users Online </h3>
            <ul id="users">
                {activeUsers}
            </ul>
        </div>
    );
}

export default ChatSidebar;