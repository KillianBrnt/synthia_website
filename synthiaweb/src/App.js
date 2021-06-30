import NavigationBar from "./Components/NavigationBar/";
import LandingPage from "./Pages/LandingPage/";
import PageDoesntExist from "./Pages/PageDoesntExist/";
import NewsletterPage from "./Pages/NewsLetterPage/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/newsletter" exact component={NewsletterPage} />
          <Route path="/" component={PageDoesntExist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
