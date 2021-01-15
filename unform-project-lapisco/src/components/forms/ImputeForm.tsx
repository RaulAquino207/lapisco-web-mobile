import React, { useEffect, useRef } from "react";
import {Input, InputProps} from "reactstrap"
import { useField } from '@unform/core';

interface Props extends InputProps {
  name: string
}

const InputeForm: React.FC<Props> = ({name}) => {

  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"

    })

  }, [fieldName, registerField]);
  return (
    <Input innerRef={inputRef}/>
  );
};

export default InputeForm;