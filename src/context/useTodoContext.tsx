import { useContext } from "react";
import { todoContext } from "./todo-context";

export default function useTodoContext() {
  const context = useContext(todoContext);
  return context;
}
