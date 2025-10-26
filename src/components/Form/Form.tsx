import { useState } from "react";
import { FormButton, FormBlock, FormField, FormLabel, FormWrapper } from "./Form.styled";
import plusIcon from '../../assets/images/plus.png'


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
      <FormWrapper>
        <FormBlock action="#" onSubmit={onSubmit}>
          <FormLabel>
            <FormField
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            <FormButton icon={plusIcon}/>
          </FormLabel>
        </FormBlock>
      </FormWrapper>
    </>
  );
};
