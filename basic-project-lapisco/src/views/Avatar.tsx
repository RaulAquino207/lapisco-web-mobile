import React from 'react';

// import { Container } from './styles';
interface User {
    url: string;
    name: string;
}

interface Props {
    user: User;
}

const Avatar: React.FC<Props> = ({user}) => {
  return <img src={user.url} alt={user.name} height-="50px" width="50px" className="Avatar"/>;
}

export default Avatar;