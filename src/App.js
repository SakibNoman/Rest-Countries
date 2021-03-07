import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Footer from '../src/Components/Footer/Footer';
import Header from '../src/Components/Header/Header';
import './App.css';
import Countries from "./Components/Countries/Countries";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import Error404 from "./Components/Error404/Error404";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Countries></Countries>
          </Route>
          <Route path="/country/:countryName" >
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*" >
            <Error404></Error404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
