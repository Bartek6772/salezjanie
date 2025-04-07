import "./button.scss";
import { Link } from "react-router-dom";


const Button = ({ children, to, dark, style }) => {

    return (
        <Link to={to} className={"button " + (dark ? "dark" : "")} style={style}>
            {children}
        </Link>
    )
}

export default Button;