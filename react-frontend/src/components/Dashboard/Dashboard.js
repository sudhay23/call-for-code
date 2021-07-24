import Header from "../Header";
import Profile from "./Profile";
import "./css/dashboardStyle.css";
const Dashboard = () => {
    return (
        <section className="dashboard">
            <Header />
            <Profile />
        </section>
    );
};

export default Dashboard;
