import { useState } from "react";
import '../components/ToDoList.css'

const ToDoList = () => {

const [tasks, setTasks] = useState(["Isplauti indus", "Pasidaryti valgyti", "Nenumirti"]);
const [newTask, setNewTask] = useState("");


function handleInputChange(event) {
    setNewTask(event.target.value);

}

function addTask() {
    if (newTask.trim() !== "") {
        setTasks(t => [...t, newTask]);
    }
    
}

function deleteTask(index) {
    const updatedTask = tasks.filter((element, indx) => indx !== index);
    setTasks(updatedTask);

}

function moveTaskUp(index) {
    const updatedTasks = [...tasks];

    if (index > 0) {
    [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
}
    setTasks(updatedTasks);

}

function moveTaskDown(index) {
    const updatedTasks = [...tasks];

    if (index < tasks.length - 1) {
    [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
}
    setTasks(updatedTasks);

}

return ( <>
<h1>TO-DO-list</h1>
<div>
    <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
    <button className="add-button" onClick={addTask}>ADD</button>
</div>
<ul>
    {
        tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>MoveUp</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>MoveDown</button>
            </li>
        )
    }
</ul>


</> 

)
}

export default ToDoList;