import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web'
import React from 'react';
import { Button } from 'reactstrap';
import InputeForm from '../components/forms/ImputeForm';
import { ButtonStyles, Styles } from './styles'

interface FormData {
  name:string;
}

const MyForm: React.FC = () => {
  
  const handleSubmit: SubmitHandler<FormData> = (data, {reset}) => {
    console.log("🚀 ~ file: index.tsx ~ line 15 ~ data", data);
    reset();
  }
  
  return <Styles>

    <Form onSubmit={handleSubmit}>
      <InputeForm name="name"/>
      <InputeForm name="email"/>
      <ButtonStyles>
        <Button type='submit'> Enviar </Button>
      </ButtonStyles>
    </Form>

  </Styles>;
}

export default MyForm;