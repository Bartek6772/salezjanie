import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            &copy; Salezjanie 2025 - <Link to="/credits">Credits</Link>
        </footer>
    )
}

export default Footer;