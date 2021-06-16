import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "../App";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/todo";

export const Todolist: React.FC = () => {
  const lists = useSelector((state: RootState) => state.todo.lists);
  return (
    <React.Fragment>
      <Wrapper>
        <h2>Todo List</h2>
        <Link to={Path.Createtickets}>Create Tickets</Link>
        <ol>
          {lists.map((todo: any) => {
            return (
              <li key={todo.id}>
                <Link to={`detailtickets/${todo.id}`}>{todo.task}</Link>
                &emsp;<button>Done</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ol>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

export type RootState2 = {
  id: string;
};
