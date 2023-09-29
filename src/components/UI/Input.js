import classes from "../Users/AddUser.module.css";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label ?? props.id}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};

export default Input;
