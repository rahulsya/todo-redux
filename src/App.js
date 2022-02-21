import { useSelector } from "react-redux";
import "./styles/App.css";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";

function App() {
  // todoItems from redux store
  const Items = useSelector((state) => state);

  return (
    <div className="container todo-container">
      <div className="title-todo">#todo</div>
      <TodoInput />
      {/* render data todo dari redux  */}
      {Items.map((item, index) => {
        return <TodoItems data={item} key={index} />;
      })}
    </div>
  );
}

export default App;
