import React from 'react';
import ClipboardRounded from '../Icon/ClipboardRounded';
import S from "./index.module.css";

const EmptyTaskList = () => {
    return (
        <div className={S.emptyTask}>
            <ClipboardRounded  />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <small>Crie tarefas e organize seus itens a fazer</small>
            </div>
        </div>
    );
}

export default EmptyTaskList;