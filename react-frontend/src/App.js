import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Marketplace from "./components/Marketplace/Marketplace";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/loginsignup" component={LoginSignUp} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;
