const todos = [
  {
    id: 1,
    todo: "Buy Some Pizza",
    completed: false,
  },
];

export const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: state.length + 1,
        todo: action.data,
        completed: false,
      };
      return [...state, newTodo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    case "COMPLETE_TODO":
      return state.map((item) => {
        if (item.id == action.id) {
          return { ...item, completed: true };
        } else {
          return { ...item };
        }
      });
    default:
      return state;
  }
};
