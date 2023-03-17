import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
