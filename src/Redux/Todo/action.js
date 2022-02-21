export const AddTodo = (todo) => {
  return {
    type: "ADD_TODO",
    data: todo,
  };
};

export const DeleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const CompleteTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    id,
  };
};
