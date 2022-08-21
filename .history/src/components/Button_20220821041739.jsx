import React from "react";
import styled from "styled-components";

export default function Button({ text, blue = false }) {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
button {
  border-radius: 4rem;
  padding:0.8rem 2rem;
  border:none;
  color:white;
}
`;
