// import { ReactNode } from "react";
// import Todo from "../models/todo";
import useTodoContext from "../context/useTodoContext";
import TodoItem from "./TodoItem";

// interface PropType {
//   todos: Todo[];
//   onDeleteTodo: (id: string) => void;
//   children?: ReactNode;
// }

export default function Todos() {
  const { todos } = useTodoContext();
  if (!todos.length) return <h2 className="fallback">No todo found!</h2>;
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// import React, { ReactNode } from "react";
// import TodoItem from "./TodoItem";

// type PropType = {
//   todos: { id: string; text: string }[];
//   children?: ReactNode;
// };

// const Todos: React.FC<PropType> = ({ todos, children }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// };
// export default Todos;
