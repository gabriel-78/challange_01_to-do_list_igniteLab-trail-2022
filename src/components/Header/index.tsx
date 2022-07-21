import Rocket from "../Icon/Rocket";
import S from "./index.module.css"

const Header = () => {
    return (
        <header className={S.header}>
            <Rocket/>
            <strong>todo</strong>
        </header>
    );
}

export default Header;