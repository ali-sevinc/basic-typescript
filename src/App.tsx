import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContext from "./context/todo-context.tsx";

// const DUMMY_TODOS=[new Todo("Learn React")]

export default function App() {
  return (
    <TodoContext>
      <NewTodo />
      <Todos />
    </TodoContext>
  );
}
