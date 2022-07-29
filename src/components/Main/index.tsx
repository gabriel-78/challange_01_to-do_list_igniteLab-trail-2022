import { ChangeEvent, FormEvent, useState } from "react";
import CreateButton from "../CreateButton";
import Input from "../Input";
import Task from "../Task";
import S from "./index.module.css";
import {v4 as uuid} from "uuid";

export interface TaskView {
    id: string;
    activity: string;
    checked: boolean;
}

const Main = () => {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<TaskView[]>([]);

    const createTask = (event: FormEvent) => {
        event.preventDefault();
        
        setTaskList((currentTaskList) => {
            return [...currentTaskList, {checked: false, id: uuid(), activity: task}]
        })

        setTask("");
    }

    const onDeleteTask = (taskId: string) => {
        setTaskList((currentTaskList) => {
            return currentTaskList.filter(({id}) => id !== taskId);
        });
    }
    
    const onHandleTaskCheckValue = (taskId: string) => {
        setTaskList((currentTaskList) => {
            return currentTaskList.map((currentTask) => {
                if (currentTask.id === taskId) {
                    return {...currentTask, checked: !currentTask.checked} as TaskView;
                }
                return currentTask;
            });
        })
    }

    const onHandleTaskValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    return (
        <main className={S.main} >
            <form className={S.formContainer} onSubmit={createTask}>
                <Input placeholder="Adicione uma nova tarefa" value={task} required onChange={onHandleTaskValue} />
                <CreateButton type="submit" />
            </form>

            <div className={S.container}>
                <div className={S.labelCounterContainer}>
                    <strong>Tarefas Criadas</strong>
                    <strong>Concluídas</strong>
                </div>
                <div className={S.taskContainer}>
                    {taskList.map(
                        (task) => <Task key={task.id} task={task} onDelete={onDeleteTask} onHandleCheckedState={onHandleTaskCheckValue} />
                    )}
                </div>
            </div>
        </main>
    )
};

export default Main;