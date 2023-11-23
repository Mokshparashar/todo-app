import React from "react";
import { MdCancel } from "react-icons/md";
interface todoPattern {
  data: { id: string; name: string }[];
  deleteTodoHandler: (id: string) => {}[];
}

const Todolist: React.FC<todoPattern> = (props) => {
  return (
    <div className="mt-12 ">
      {props.data.map((item) => {
        return (
          <div className="flex items-center justify-center">
            <h1
              key={item.id}
              className="w-2/5 bg-green-200 mt-2 h-10 text-center pt-2 uppercase font-bold "
            >
              {item.name}
            </h1>
            <MdCancel
              className="text-3xl text-red-600 mt-2 cursor-pointer hover:opacity-50"
              onClick={props.deleteTodoHandler.bind(null, item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
