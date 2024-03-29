import { Trash } from 'phosphor-react'
import { FC } from 'react'
import { TaskView } from '../Main'
import S from './index.module.css'

export interface TaskProps {
  task: TaskView
  onDelete(id: string): void
  onHandleCheckedState(id: string): void
}

const Task: FC<TaskProps> = ({ task, onDelete, onHandleCheckedState }) => {
  return (
    <div className={S.taskBox}>
      <label className={S.customCheckBox}>
        <input
          type="checkbox"
          onChange={() => onHandleCheckedState(task.id)}
          checked={task.checked}
        />
        <span />
      </label>
      <div>
        {task.checked ? (
          <strong className={S.checked}>{task.activity}</strong>
        ) : (
          <strong>{task.activity}</strong>
        )}
      </div>
      <button type="button" onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}

export default Task
