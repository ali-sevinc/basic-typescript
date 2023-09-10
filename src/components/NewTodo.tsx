import { FormEvent, useState } from "react";
import Todo from "../models/todo";
import useTodoContext from "../context/useTodoContext";
// interface ProtType {
//   onAddTodo: (data: Todo) => void;
// }

export default function NewTodo() {
  const [textInput, setTextInput] = useState("");
  const { handleAddTodo: onAddTodo } = useTodoContext();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!textInput.trim().length) return;
    const data = new Todo(textInput);
    onAddTodo(data);
    setTextInput("");
  }

  return (
    <div className="form-container">
      <h3>Add a new Todo</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

// import { FormEvent, useRef } from "react";
// import Todo from "../models/todo";
// interface ProtType {
//   onAddTodo: (data: Todo) => void;
// }

// export default function NewTodo({ onAddTodo }: ProtType) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     const enteredText = inputRef.current?.value;
//     if (!enteredText?.trim().length) return;
//     const data = new Todo(enteredText);
//     onAddTodo(data);
//   }

//   return (
//     <div className="form-container">
//       <h3>Add a new Todo</h3>
//       <form onSubmit={handleSubmit} className="form">
//         <label htmlFor="todo">Todo Text</label>
//         <input type="text" id="todo" ref={inputRef} />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }
