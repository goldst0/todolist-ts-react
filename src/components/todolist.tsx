import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "../App";

export const Todolist: React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <h2>Todo List</h2>
        <Link to={Path.Createtickets}>Create Tickets</Link>
        <ol>
          <li>
            <Link to={Path.Detailtickets}>tomato</Link>
            &emsp;<button>Done</button>
            <button>Delete</button>
          </li>
        </ol>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;
