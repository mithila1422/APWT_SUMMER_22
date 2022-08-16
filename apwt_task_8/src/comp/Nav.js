import style from "../Comp/css/Nav.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


const Nav = () => {
    return(
        <>
        <section className={style.header}>
        <nav className={style.navb}>
            <div className={style.menu}>
                <ul className={style.ul}>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to="/user">User</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </section>
       
         
        </>
    );
};

export default Nav;