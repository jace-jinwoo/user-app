import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // const activate = () => {
  //     ref.current.focus()
  // }
  const activate = () => {
    inputRef.current.focus();
  };
  const inactivate = () => {
    inputRef.current.blur();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
      blur: inactivate,
    };
  });

  return (
    <>
      <label htmlFor={props.id}>{props.label ?? props.id}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
});

export default Input;
