import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, postTodo, deleteAllTodos, deleteTodo ,checkTodoItem} from "../redux/todo.slice";

// Import Component
import Input from "../components/input/Input.component";
import ListItem from "../components/listItem/ListItem.component";
import Loader from "../components/loader/Loader.component";
import ButtonCustom from "../components/button/Button.component";

// Import Style File
import "./todo.style.scss";


const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [empty, setEmpty] = useState(false);
  const { todoList, pending } = useSelector((state) => state.todoApp);
  const dispatch = useDispatch();

  // Get All Todos
  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch]);


  // Read input 
  const handleChange = (e) => {
    setNewTask(() => e.target.value);
    setEmpty(false);
  };

  // Post todo and clear input
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTask === "") {
      setEmpty(true);
      return;
    }
    dispatch(postTodo({ title: newTask , checked:false}));
    setNewTask("");
  };

  // Delete all todos 
  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatch(deleteAllTodos());
  };

  // Delete todo which is selected
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  // Check todo 
  const handleCheck =  (id,status) => {
     dispatch(checkTodoItem({
      id: id,
      status: !status})
    ) 
  }

  
  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <div className="action">
        <div className="action-groups">
        <Input handleChange={handleChange} value={newTask} empty={empty}/>
        <div className="action-groups--btns">
          <ButtonCustom buttonType={"add"} onClick={handleAdd}>
            ADD
          </ButtonCustom>
          <ButtonCustom buttonType={"deleteAll"} onClick={handleDeleteAll}>
            {" "}
            Delete All{" "}
          </ButtonCustom>
        </div>
        </div>
        <div>
        <div className="loader-container">
          {pending && <Loader/>}
        </div>
          {todoList &&
            todoList.map((item) => (
              <ListItem
                key={item._id}
                title={item.title}
                checked={item.checked}
                handleDeleteEvent={() => handleDeleteTodo(item._id)}
                handleCheckEvent = {() => handleCheck(item._id,item.checked)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
