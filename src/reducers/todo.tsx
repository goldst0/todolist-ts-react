import { ADDTASK, DONETASK } from "../actions";
import { Todo } from "../types";

const initialState = {
  lists: [
    {
      id: "1",
      task: "Banana",
      detail: "bad",
      person: "cat",
      deadline: "2021-6-25",
      done: false,
    },
    {
      id: "2",
      task: "Strawberry",
      detail: "good",
      person: "angel",
      deadline: "2021-6-31",
      done: false,
    },
    {
      id: "3",
      task: "Pineapple",
      detail: "better",
      person: "badman",
      deadline: "2021-7-2",
      done: false,
    },
  ],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADDTASK:
      return { lists: [...state.lists, action.todo] };
    case DONETASK:
      const doneTasks = [...state.lists];
      doneTasks[action.index].done = true;
      //   !doneTasks[action.index].done;
      return { lists: doneTasks };
    default:
      return state;
  }
};

export type RootState = {
  todo: any;
};
