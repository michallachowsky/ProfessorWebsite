import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact';
import ReactPage from './pages/ReactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutMe' exact component={AboutMe} />
          <Route path='/Course' exact component={ReactPage} />
          <Route path='/Contact' exact component={Contact} />
        </Switch>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
