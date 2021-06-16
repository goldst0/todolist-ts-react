export const ADDTASK = "addTask";

export const addTask = (
  id: string,
  task: string,
  detail: string,
  person: string,
  deadline: string
) => ({
  type: ADDTASK,
  todo: {
    id: id,
    task: task,
    detail: detail,
    person: person,
    deadline: deadline,
    done: false,
  },
});

export const DONETASK = "doneTask";

export const doneTask = (index: any) => ({
  type: DONETASK,
  index: index,
});

export const REMOVETASK = "removeTask";

export const removeTask = (index: any) => ({
  type: REMOVETASK,
  index: index,
});
