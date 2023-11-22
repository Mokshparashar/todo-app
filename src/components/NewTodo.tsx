import React, { useRef } from "react";

interface newTodoInterface {
  newTodoCreaterHandler: (extra: string) => void;
}
const NewTodo: React.FC<newTodoInterface> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.newTodoCreaterHandler(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/4 m-auto ">
      <div className="pt-36">
        <label htmlFor="text" className="block text-green-700">
          Enter TODO
        </label>
        <input
          type="text"
          name="text"
          id="text"
          ref={textInputRef}
          className="border-solid border-black border-2 outline-none w-72 h-10 rounded-lg pl-4"
        />
      </div>
      <button
        type="submit"
        className="border-solid border-green-700 border-2 p-2 font-semibold rounded-lg mt-4  bg-green-700 text-white hover:bg-white hover:text-green-700 hover:transition-all hover:duration-1000"
      >
        Add TODO
      </button>
    </form>
  );
};

export default NewTodo;
