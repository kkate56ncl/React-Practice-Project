import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState(); //the initial state is undefined and the boolean value of undefined is false.

  function handleNewUser(event) {
    const { id, value } = event.target;

    setNewUser((prevUser) => {
      return { ...prevUser, [id]: value };
    });
  }

  function handleAddUser(event) {
    event.preventDefault();

    if (
      newUser.username.trim().length === 0 ||
      newUser.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        content: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+newUser.age < 0) {
      setError({
        title: "Invalid Age",
        content: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAdd(newUser);
    setNewUser({ username: "", age: "" });
  }

  function handleError() {
    setError(null); //the boolean value of null is false.
  }

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.content}
          onConfirm={handleError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleAddUser}>
          <lable htmlFor="username">Username</lable>
          <input
            onChange={handleNewUser}
            value={newUser.username}
            id="username"
            type="text"
          ></input>
          <lable htmlFor="age">Age</lable>
          <input
            onChange={handleNewUser}
            value={newUser.age}
            id="age"
            type="number"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
