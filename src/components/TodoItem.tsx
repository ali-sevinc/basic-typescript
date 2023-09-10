import useTodoContext from "../context/useTodoContext";
import Todo from "../models/todo";
interface PropType {
  todo: Todo;
  //   onDeleteTodo: (id: string) => void;
}

export default function TodoItem({ todo }: PropType) {
  const { handleDeleteTodo: onDeleteTodo } = useTodoContext();

  return <li onClick={() => onDeleteTodo(todo.id)}>{todo.text}</li>;
}
