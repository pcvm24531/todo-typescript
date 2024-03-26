import { useState } from "react";
import { ListTask } from "./ListTask";

export const TodoApp = () => {

    const [task, setTask]=useState<string>('');
    const [taskList, setTaskList]=useState<string[]>([]);
    
    const handleAddTask = ()=>{
        if(task.trim() === '')return;
        setTaskList( previusTask => [...previusTask, task] );
        setTask( '' );
    };
    const handleDeleteTask = (index:number)=>{console.log('Hola');
    
        //setTaskList( task => task.filter(  (_,i)=> i!==index ) )
    };

    return(
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input type="text"
                       value={task}
                       onChange={ (e)=>setTask(e.target.value) }
                       placeholder="New Task" />
                <button onClick={ handleAddTask } >Add Task</button>
            </div>
            <ListTask taskList={taskList} deletedTask={handleDeleteTask} ></ListTask>
        </div>
    );
};