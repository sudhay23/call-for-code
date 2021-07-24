import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Marketplace from "./components/Marketplace/Marketplace";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Homepage} />
                <Route path="/marketplace" component={Marketplace} />
            </Router>
        </div>
    );
}

export default App;
