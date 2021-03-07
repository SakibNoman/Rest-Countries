import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Footer from '../src/Components/Footer/Footer';
import Header from '../src/Components/Header/Header';
import './App.css';
import Countries from "./Components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Countries></Countries>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
