import React from "react";
import './container.scss';

const Container = ({data} = props) => {
  const object = JSON.parse(data)
  return (
    <div className="container">

      {object['name']} is {object['age']} from {object['country']}
    </div>
  );
}

export default Container;