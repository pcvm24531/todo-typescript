import { Task } from "./Task";

type TaskList = {
    taskList: string[],
    deletedTask: (index:number) => void
};

export const ListTask = ( {taskList, deletedTask}: TaskList )=>{
    return(
        <div className="taskList">
            {taskList.map((task, index)=>(
                <Task key={index} task={task} deleteTask={()=>deletedTask}></Task>
            )
            )}
        </div>
    );
}