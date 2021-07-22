import "./styles/Header.css";
import logo from "../files/logo.jpg";
const Header = () => {
    return (
        <header>
            <div className="companyInfo">
                <img id="headerLogo" src={logo} alt="Logo" />
                <h1 id="headerName">wUse</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="https://example.com">Home</a>
                    </li>
                    <li>
                        <a href="https://example.com">Marketplace</a>
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
