import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTask } from "../actions";

export const Createtickets: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [person, setPerson] = useState("");
  const [deadline, setDeadline] = useState("");
  const addTodo = () => {
    const id: string = uuidv4();
    dispatch(addTask(id, task, detail, person, deadline));
    setTask("");
    setDetail("");
    setPerson("");
    setDeadline("");
    handleLink("/");
  };
  return (
    <React.Fragment>
      <h1>Create Tickets</h1>
      <p>
        Task:
        <input
          type="text"
          value={task}
          onChange={(e): void => setTask(e.target.value)}
        ></input>
      </p>
      <p>
        Detail:
        <textarea
          value={detail}
          onChange={(e): void => setDetail(e.target.value)}
        ></textarea>
      </p>
      <p>
        Person:
        <input
          type="text"
          value={person}
          onChange={(e): void => setPerson(e.target.value)}
        ></input>
      </p>
      <p>
        Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e): void => setDeadline(e.target.value)}
        ></input>
      </p>
      <Addbutton onClick={addTodo}>Add</Addbutton>
    </React.Fragment>
  );
};

const Addbutton = styled.button`
  justify-content: center;
`;
