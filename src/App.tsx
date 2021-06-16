import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Todolist } from "./components/todolist";
import { Createtickets } from "./components/createtickets";
import { Headers } from "./components/header";

export const Path = {
  todolist: "/",
  Createtickets: "/createtickets",
};

const App: React.FC = () => {
  return (
    <Headers>
      <BrowserRouter>
        <Switch>
          <Route exact path={Path.todolist} component={Todolist}></Route>
          <Route
            exact
            path={Path.Createtickets}
            component={Createtickets}
          ></Route>
          <Redirect to={Path.todolist} />
        </Switch>
      </BrowserRouter>
    </Headers>
  );
};

export default App;
