import React from "react";
import { Interface } from "readline";

interface todoPattern {
  data: { id: string; name: string }[];
}

const Todolist: React.FC<todoPattern> = (props) => {
  return (
    <div className="mt-12 ">
      {props.data.map((item) => {
        return (
          <h1
            key={item.id}
            className="w-2/5 m-auto bg-green-200 mt-2 h-10 text-center pt-2 uppercase font-bold"
          >
            {item.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Todolist;
