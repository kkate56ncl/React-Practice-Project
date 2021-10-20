import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUsers(addedUsers) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, addedUsers];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAdd={addUsers} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
