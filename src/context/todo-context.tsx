// import { createContext, ReactNode, useReducer, useContext } from "react";
// import Todo from "../models/todo";

// interface PropType {
//   children?: ReactNode;
// }

// interface StateType {
//   todos: Todo[];
//   handleAddTodo: (data: Todo) => void;
//   handleDeleteTodo: (id: string) => void;
// }

// interface ActionType {
//   type: "todo/add" | "todo/remove";
//   payload?: Todo | { id: string };
// }

// const initialState: StateType = {
//   todos: [],
//   handleAddTodo: (data: Todo) => {},
//   handleDeleteTodo: (id: string) => {},
// };

// const todoContext = createContext<StateType>(initialState);

// function reducer(state: StateType, action: ActionType) {
//   switch (action.type) {
//     case "todo/add":
//       return { ...state, todos: [...state.todos, action.payload as Todo] };
//     case "todo/remove":
//       return {
//         ...state,
//         todos: state.todos.filter(
//           (item) => item.id !== (action.payload as { id: string }).id
//         ),
//       };
//     default:
//       return state;
//   }
// }

// function TodoContext({ children }: PropType) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { todos } = state;

//   const handleAddTodo = (data: Todo) => {
//     dispatch({ type: "todo/add", payload: data });
//   };
//   const handleDeleteTodo = (id: string) => {
//     dispatch({ type: "todo/remove", payload: { id } });
//   };

//   return (
//     <todoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo }}>
//       {children}
//     </todoContext.Provider>
//   );
// }

// export default TodoContext;

// export function useTodoContext() {
//   const context = useContext(todoContext);
//   return context;
// }

import { createContext, ReactNode, useReducer } from "react";
import Todo from "../models/todo";

interface PropType {
  children?: ReactNode;
}

interface StateType {
  todos: Todo[];
  handleAddTodo: (data: Todo) => void;
  handleDeleteTodo: (id: string) => void;
}

interface ActionType {
  type: "todo/add" | "todo/remove";
  payload?: Todo | { id: string };
}

const initialState: StateType = {
  todos: [],
};

export const todoContext = createContext<StateType>(initialState);

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "todo/add":
      return { ...state, todos: [...state.todos, action.payload as Todo] };
    case "todo/remove":
      return {
        ...state,
        todos: state.todos.filter(
          (item) => item.id !== (action.payload as { id: string }).id
        ),
      };
    default:
      return state;
  }
}

function TodoContext({ children }: PropType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;

  const handleAddTodo = (data: Todo) => {
    dispatch({ type: "todo/add", payload: data });
  };
  const handleDeleteTodo = (id: string) => {
    dispatch({ type: "todo/remove", payload: { id } });
  };

  return (
    <todoContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo }}>
      {children}
    </todoContext.Provider>
  );
}

export default TodoContext;
