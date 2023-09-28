import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Modal from "../UI/Modal";

const initialValue = {
  userName: "",
  age: "",
};

const AddUser = (props) => {
  const [entered, setEntered] = useState(initialValue);
  const [completed, setCompleted] = useState();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      entered.userName.trim().length === 0 ||
      entered.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+entered.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    setCompleted({
      title: "Entered",
      message: "Entered Correctly!",
    });
    props.onAddUser(entered.userName, entered.age);
    setEntered(initialValue);
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;

    setEntered({ ...entered, [id]: value });
  };

  const completedHandler = () => {
    setCompleted(null);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="userName"
            value={entered.userName}
            onChange={changeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={entered.age}
            onChange={changeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {completed && (
        <Modal
          title={completed.title}
          message={completed.message}
          onConfirm={completedHandler}
        />
      )}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    </>
  );
};

export default AddUser;
