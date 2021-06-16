import { ADDTASK } from "../actions";
import { Todo } from "../types";

const initialState = {
  lists: [
    {
      id: "1",
      task: "Banana",
      detail: "bad",
      person: "cat",
      deadline: "2021-6-25",
      complete: false,
    },
    {
      id: 2,
      task: "Strawberry",
      detail: "good",
      person: "angel",
      deadline: "2021-6-31",
      complete: false,
    },
    {
      id: 3,
      task: "Pineapple",
      detail: "better",
      person: "badman",
      deadline: "2021-7-2",
      complete: false,
    },
  ],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADDTASK:
      return { lists: [...state.lists, action.todo] };
    default:
      return state;
  }
};

export type RootState = {
  todo: any;
};
