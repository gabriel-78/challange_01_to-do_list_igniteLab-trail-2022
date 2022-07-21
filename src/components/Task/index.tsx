import { Trash } from "phosphor-react";
import { FC } from "react";
import { TaskView } from "../Main";
import S from "./index.module.css";

export interface TaskProps {
    task: TaskView;
    onHandleCheckedState(id: string): void;
}

const Task : FC<TaskProps> = ({task,onHandleCheckedState}) => {
    return (
        <div className={S.taskBox}>
            <label className={S.customCheckBox}>
                <input type="checkbox" onChange={() => onHandleCheckedState(task.id)} checked={task.checked} />
                <span/>
            </label>
            {
                task.checked 
                    ? <strong className={S.checked}>{task.activity}</strong>
                    : <strong>{task.activity}</strong>
            }
            <button type="button">
                <Trash size={20}/>
            </button>
        </div>
    );
}



export default Task;