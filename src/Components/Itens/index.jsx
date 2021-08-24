import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImagesFilter from "../ImagesFilter";

const Items = styled.div`
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Items>
      {ImagesFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
