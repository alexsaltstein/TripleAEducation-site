import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import AnalyticsScreen from "./components/Analytics/AnalyticsScreen";
import HomeScreen from "./components/Home/HomeScreen";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/analytics" component={AnalyticsScreen} />
      </div>
    </Router>
  );
}

export default App;
