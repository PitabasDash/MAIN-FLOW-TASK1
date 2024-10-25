import TodoIteam from "./TodoIteam";
import styles from "./TodoItems.module.css";

const TodoIteams = ({ todoIteams, onDeleteClick }) => {
    return (
    <div className={styles.itemsContainer}>
        {todoIteams.map(item => <TodoIteam key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoIteam>)}
         
    </div>
    );
};

export default TodoIteams;