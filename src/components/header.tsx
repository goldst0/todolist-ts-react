import React from "react";
import styled from "styled-components";

export const Headers: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Header>Todo List App</Header>
        <div>{children}</div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Header = styled.h3`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: skyblue;
  color: white;
  padding: 0 20px;
  margin: 0;
  text-align: center;
`;
