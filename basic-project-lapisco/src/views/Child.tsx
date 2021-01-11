import React from 'react';

// It is a convention to make an interface for the props so that it is much more organized.
interface Props {
    number: number;
}

// const views: React.FC<any> = (props:any) ...
const views: React.FC<Props> = ({number}) => {
    // return <h2> Sum of number sent: {props.number + props.number}</h2>;
  return <h2> Sum of number sent: {number + number}</h2>;
}

export default views;