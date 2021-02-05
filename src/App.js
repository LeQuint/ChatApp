import './App.css';

import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { StoreProvider } from "./components/Store";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/ChatRoom">
                <ChatRoom/>
            </Route>
          </Switch>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
