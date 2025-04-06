import "./button.scss";
import { Link } from "react-router-dom";


const Button = ({ children, to, dark }) => {

    // const handleScroll = () => {
    //     if (scrollTo != null)
    //         scrollTo.current?.scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <Link to={to} className={"button " + (dark ? "dark" : "")}>
            {children}
        </Link>
    )
}

export default Button;