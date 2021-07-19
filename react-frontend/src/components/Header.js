import "./styles/Header.css";
import logo from "../files/logo.jpg";
const Header = (props) => {
    return (
        <header>
            <div className="companyInfo">
                <img id="headerLogo" src={logo} alt="Logo" />
                <h1 id="headerName">EcoUse</h1>
            </div>
            <nav style={{ padding: "30px 50px" }}>
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
