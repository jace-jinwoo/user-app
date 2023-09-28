import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";
import Button from "./Button";

const Overlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Message = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Message
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
