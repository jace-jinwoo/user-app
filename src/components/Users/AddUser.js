import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const initialValue = {
  userName: "",
  age: "",
};

const AddUser = (props) => {
  const [entered, setEntered] = useState(initialValue);
  const addUserHandler = (e) => {
    e.preventDefault();
    if (entered.userName.trim().length === 0 || entered.age.trim().length === 0)
      return;
    if (entered.age < 1) return;

    console.log(entered);
    setEntered(initialValue);
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;

    setEntered({ ...entered, [id]: value });
  };

  return (
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
  );
};

export default AddUser;
