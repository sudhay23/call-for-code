import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Marketplace from "./components/Marketplace/Marketplace";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
