import "./styles/Header.css";
import logo from "../files/logo.jpg";
import { NavLink } from "react-router-dom";
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
                        <NavLink to="/" exact activeClassName="navActive">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/marketplace" activeClassName="navActive">
                            Marketplace
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" activeClassName="navActive">
                            My Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://example.com">About Us</a>
                    </li>
                    <li>
                    <NavLink to="/loginsignup" activeClassName="navActive">
                            Login/SignUp
                        </NavLink>                   
                         </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
