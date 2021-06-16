import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "../App";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../reducers/todo";
import { doneTask, removeTask } from "../actions";

export const Todolist: React.FC = () => {
  const lists = useSelector((state: RootState) => state.todo.lists);
  const dispatch = useDispatch();
  //   console.log(lists);
  const doneTodo = (index: any) => {
    dispatch(doneTask(index));
  };
  const removeTodo = (index: any) => {
    dispatch(removeTask(index));
  };
  return (
    <React.Fragment>
      <Wrapper>
        <h2>Todo List</h2>
        <Link to={Path.Createtickets}>Create Tickets</Link>
        <ol>
          {lists.map((todo: any, index: any) => {
            return (
              <li key={todo.id}>
                {todo.done ? (
                  <del>
                    <Link to={`detailtickets/${todo.id}`}>{todo.task}</Link>
                  </del>
                ) : (
                  <span>
                    <Link to={`detailtickets/${todo.id}`}>{todo.task}</Link>
                  </span>
                )}
                &emsp;
                <button onClick={() => doneTodo(index)}>Done</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
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
