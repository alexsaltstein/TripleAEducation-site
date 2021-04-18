import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import AnalyticsScreen from "./components/Analytics/AnalyticsScreen";
import HomeScreen from "./components/Home/HomeScreen";
import MemoCards from './components/MemoCards/MemoCards'
import CreateCards from './components/MemoCards/CreateCards'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/analytics" component={AnalyticsScreen} />
        <Route path="/cards" component={MemoCards} />
        <Route path="/create" component={CreateCards} />
      </div>
    </Router>
  );
}

export default App;
