const TodoItems = () => {
  return (
    <div className="list-todo">
      <div className="list-title">BuyPizza</div>
      <div className="list-action">
        <button className="success">Completed</button>
        <button className="danger">Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
