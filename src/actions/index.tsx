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
