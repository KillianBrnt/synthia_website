import NavigationBar from "./Components/NavigationBar/";
import LandingPage from "./Pages/LandingPage/";
import PageDoesntExist from "./Pages/PageDoesntExist/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/" component={PageDoesntExist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
