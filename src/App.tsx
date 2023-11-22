import React, { useState } from "react";
import Todolist from "./components/Todolist";
import NewTodo from "./components/NewTodo";
import { nanoid } from "nanoid";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLight } from "react-icons/md";

const todoData = [{ id: nanoid(), name: "todo1" }];
function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState(todoData);
  function newTodoCreaterHandler(extra: string) {
    console.log(extra);
    let newData = data.concat([{ id: nanoid(), name: extra }]);
    setData(newData);
  }
  return (
    <div
      className="App min-h-screen "
      style={{ background: dark ? "rgb(0, 19, 32)" : "white" }}
    >
      {dark ? (
        <MdOutlineLight
          className="float-right w-12 h-12 m-4 text-yellow-300"
          onClick={() => setDark(false)}
        />
      ) : (
        <MdDarkMode
          className="float-right w-12 h-12 m-4 text-blue-950"
          onClick={() => setDark(true)}
        />
      )}
      <NewTodo newTodoCreaterHandler={newTodoCreaterHandler} />
      <Todolist data={data} />
    </div>
  );
}

export default App;
