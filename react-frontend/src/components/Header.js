import "./styles/Header.css";
import logo from "../files/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="companyInfo">
                <img id="headerLogo" src={logo} alt="Logo" />
                <h1 id="headerName">
                    <span
                        style={{ fontWeight: 500, color: "hsl(160,60%,50%)" }}
                    >
                        w
                    </span>
                    Use
                </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" exact>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>
                    <li>
                        <a href="https://example.com">My Dashboard</a>
                    </li>
                    <li>
                        <a href="https://example.com">About Us</a>
                    </li>
                    <li>
                        <a href="https://example.com">Signin/Signup</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
