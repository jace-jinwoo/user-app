import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useEffect, useReducer, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Modal from "../UI/Modal";
import Input from "../UI/Input";

const initialValue = {
  name: "",
  nameIsValid: false,
  age: "",
  ageIsValid: false,
};

const userReducer = (state, action) => {
  if (action.type === "NAME_INPUT") {
    return {
      ...state,
      name: action.payload,
      nameIsValid: action.payload.trim().length > 5,
    };
  }
  if (action.type === "AGE_INPUT") {
    return {
      ...state,
      age: action.payload,
      ageIsValid: action.payload.trim().length > 0 && +action.payload > 0,
    };
  }

  return initialValue;
};

const AddUserValidation = (props) => {
  // const [userState, setEntered] = useStat(initialValue);
  const [userState, dispatchUser] = useReducer(userReducer, initialValue);
  const [completed, setCompleted] = useState();
  // const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    setCompleted({
      title: "Entered",
      message: "Entered Correctly!",
    });
    props.onAddUser(userState.name, userState.age);
    dispatchUser({ type: "" });
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;

    // setEntered({ ...userState, [id]: value });
    let action = id === "name" ? "NAME_INPUT" : id === "age" ? "AGE_INPUT" : "";
    dispatchUser({ type: action, payload: value });
  };

  const blurHandler = () => {};

  const completedHandler = () => {
    setCompleted(null);
  };
  // const errorHandler = () => {
  //   setError(null);
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("setTimeout worked!");
  //     dispatchUser({type: action, payload: value});

  //     setEntered((prevState) => ({
  //       ...prevState,
  //       nameIsValid: userState.name.trim().length > 5,
  //       ageIsValid: userState.age.trim().length > 8,
  //     }));
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [userState.name, userState.age]);

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <Input
            id="name"
            value={userState.name}
            className={userState.nameIsValid ? "" : classes.invalid}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          <Input
            id="age"
            label="Age (Years)"
            type="number"
            value={userState.age}
            className={userState.ageIsValid ? "" : classes.invalid}
            onChange={changeHandler}
            onBlur={blurHandler}
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
      {/* {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )} */}
    </>
  );
};

export default AddUserValidation;
