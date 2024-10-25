import { useRef } from "react";
import { IoBagAdd } from "react-icons/io5";


function AddTodo({onNewIteam}) {

 const todoNameElement = useRef();
 const dueDateElement = useRef();


const handelAddButtonClicked = (event) => {
  event.preventDefault()
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value = "";
 dueDateElement.current.value = "";
  onNewIteam(todoName, dueDate);
}




    return (
    <form className="row" onSubmit={handelAddButtonClicked}>

    <div className="col-6">
      <input type="text"
      ref={todoNameElement}
       placeholder="Enter Todo Here" 
       ></input>
    </div>
      <div className="col-4">
        <input type="date"
        ref={dueDateElement } 
         />
      </div>
      <div className="col-1">
<button type="submit"  className="btn btn-success s-button" > <IoBagAdd /></button>
      </div>
    </form>
    )
}

export default AddTodo;