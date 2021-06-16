import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

export const Createtickets: React.FC = () => {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [person, setPerson] = useState("");
  const [deadline, setDeadline] = useState("");
  const addTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      task: task,
      detail: detail,
      person: person,
      deadline: deadline,
      done: false,
    };
    setTask("");
    setDetail("");
    setPerson("");
    setDeadline("");
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
