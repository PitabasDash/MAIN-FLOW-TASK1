import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoIteams from "./components/TodoIteams";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  

const [todoIteams, setTodoItems] = useState([]);

const handelNewIteam = (iteamName, iteamDueDate) => {
      setTodoItems((currValue) => [
          ...currValue, 
          { name: iteamName, dueDate: iteamDueDate },
      ]);
};

const handleDeleteIteam = (todoIteamName) => {
  const newTodoIteams = todoIteams.filter((iteam) => iteam.name !== todoIteamName);
  setTodoItems(newTodoIteams)
}
  
  return <center>
    
    <AppName />
    <AddTodo onNewIteam={handelNewIteam} />
    {todoIteams.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoIteams todoIteams={todoIteams} onDeleteClick={handleDeleteIteam}></TodoIteams>

   
    
    
    </center>
  
  
}

export default App
