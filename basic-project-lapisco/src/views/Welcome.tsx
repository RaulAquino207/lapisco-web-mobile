import React from 'react';
import Avatar from './Avatar';

// import { Container } from './styles';
interface Props{
  fullname: string;
}

const Welcome: React.FC<Props> = ({fullname}) => {
  const userInfo = { url:"https://carismartes.com.br/assets/global/images/avatars/avatar7_big@2x.png", name: fullname};

  return <h1><Avatar user={userInfo}/>Bem vindo, {fullname}</h1>;
}

export default Welcome;