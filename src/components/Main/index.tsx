import CreateButton from "../CreateButton";
import Input from "../Input";
import S from "./index.module.css";

const Main = () => {
    return (
        <main className={S.main} >
            <div className={S.inputContainer}>
                <Input placeholder="Adicione uma nova tarefa" />
                <CreateButton/>
            </div>
        </main>
    )
};

export default Main;