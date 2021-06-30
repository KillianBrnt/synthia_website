import NavigationBar from "./Components/NavigationBar/";
import "./App.css";
import LandingPage from "./Pages/LandingPage/";
import PageDoesntExist from "./Pages/PageDoesntExist/";
import NewsletterPage from "./Pages/NewsLetterPage/";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <div>
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <NavigationBar />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location} >
                    <Route path="/" exact component={LandingPage} />
                    <Route
                      path="/newsletter"
                      exact
                      component={NewsletterPage}
                    />
                    <Route path="/" component={PageDoesntExist} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
