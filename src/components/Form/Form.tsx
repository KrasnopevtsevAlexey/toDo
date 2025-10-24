import { useState } from "react";
import "./Form.scss";
import classes from "./Form.module.scss"

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const onSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault()
    if (text) {
      props.createNewToDo(text);
      setText("");
    }
  };

  return (
    <>
      <div className={classes.formwrapper}>
        <form action="#" onSubmit={onSubmit}>
          <label>
            <input
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            <button></button>
          </label>
        </form>
      </div>
    </>
  );
};
