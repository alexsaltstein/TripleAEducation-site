import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import LoginScreen from './components/Login/LoginScreen'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link className="showlink" to="/login">
              Shows
        </Link>
        <Route path="/login" component={LoginScreen} />
      </header>
    </div>
    </Router>
  );
}

export default App;
