import React, { useState } from "react";
import Todolist from "./components/Todolist";
import NewTodo from "./components/NewTodo";
import { nanoid } from "nanoid";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLight } from "react-icons/md";

const todoData = [{ id: nanoid(), name: "todo1" }];
function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  function newTodoCreaterHandler(extra: string) {
    console.log(extra);
    // let newData = data.concat([{ id: nanoid(), name: extra }]);
    // setData(newData);
    setData((prevTodos) => [...prevTodos, { id: nanoid(), name: extra }]);
  }

  function deleteTodoHAndler(itemId: string): any {
    setData((prevTodos) => {
      return prevTodos.filter((item) => item.id !== itemId);
    });
  }
  return (
    <div
      className="App min-h-screen transition-all duration-500"
      style={{ background: dark ? "rgb(0, 19, 32)" : "white" }}
    >
      {dark ? (
        <MdOutlineLight
          className="float-right w-12 h-12 m-4 text-yellow-300 cursor-pointer"
          onClick={() => setDark(false)}
        />
      ) : (
        <MdDarkMode
          className="float-right w-12 h-12 m-4 text-blue-950 cursor-pointer"
          onClick={() => setDark(true)}
        />
      )}
      <NewTodo newTodoCreaterHandler={newTodoCreaterHandler} />
      {data.length === 0 ? (
        <h1 className="text-center mt-8">No TODO available</h1>
      ) : (
        <Todolist data={data} deleteTodoHandler={deleteTodoHAndler} />
      )}
    </div>
  );
}

export default App;
