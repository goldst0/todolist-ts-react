import React from "react";
// import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../reducers/todo";
// import { RootState2 } from "./todolist";

export const Detailtickets: React.FC = () => {
  interface ParamTypes {
    id: string;
  }
  const { id } = useParams<ParamTypes>();
  const lists = useSelector((state: RootState) => state.todo.lists);
  console.log(id);
  return (
    <React.Fragment>
      <h2>Detail Tickets</h2>

      {lists
        .filter((todo: any) => id === todo.id)
        .map((todo: any) => {
          return (
            <div key={todo.id}>
              <p>Task:&emsp;{todo.task}</p>
              <p>Detail:&emsp;{todo.detail}</p>
              <p>Person:&emsp;{todo.person}</p>
              <p>Deadline:&emsp;{todo.deadline}</p>
            </div>
          );
        })}
    </React.Fragment>
  );
};
