import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from './Store';

function Login() {
    const [, dispatch] = useStore();
    const usernameRef = useRef();
    const roomRef = useRef();

    const handleLogin = () => {
        dispatch({type: "SET_USERNAME", payload: usernameRef.current.value});
        dispatch({type: "SET_ROOM", payload: roomRef.current.value});
    }

    return (
      <div class="join-container">
              <header class="join-header">
                  <h1><i class="fas fa-smile"></i> ChatApp</h1>
              </header>
              <main class="join-main">
                  <form action="chat.html">
                      <div class="form-control">
                          <label for="username">Username</label>
                          <input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="Enter username..."
                              ref = {usernameRef}
                              required
                          />
                      </div>
                      <div class="form-control">
                          <label for="room">Room</label>
                          <select name="room" id="room" ref={roomRef}>
                              <option value="Fiery Sand Dunes">The Fiery Sand Dunes</option>
                              <option value="Misty Mountains">The Misty Mountains</option>
                              <option value="Silent Swamp">The Silent Swamp</option>
                          </select>
                      </div>
            <Link to='/ChatRoom'>
              <button type="submit" class="btn" onClick={handleLogin}>Join Chat</button>
            </Link>
                  </form>
            </main>
        </div>
    );
}

export default Login;