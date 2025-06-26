import React, { createContext, useState } from 'react';
import ChildA from './ChlidA.js';
// import ChildB from './childB.js';

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState("Ali");

  return (
    <MyContext.Provider value={user}>
      <h1>Main App</h1>
      <ChildA />
      {/* <ChildB/> */}
    </MyContext.Provider>
  );
}

export default App;