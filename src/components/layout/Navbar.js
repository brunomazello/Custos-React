import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png"
import Container from "./Container";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><h1>ProjeCalc - Calcule seus projetos</h1></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;