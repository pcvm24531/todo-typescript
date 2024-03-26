type Tarea = {
    task: string,
    deleteTask: ()=>void
}

export const Task = ( {task, deleteTask}: Tarea )=>{
    console.log(deleteTask);
    
    return(
        <div className="task">
            <span>{task}</span>
            <button onClick={deleteTask} >Delete Task</button>
        </div>
    );
}