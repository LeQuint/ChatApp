import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {
    username: "anonymous",
    room: "default"
};

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_USERNAME":
        return {
            ...state,
            username: action.payload
        }
    case "SET_ROOM":
        return {
            ...state,
            room: action.payload
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);