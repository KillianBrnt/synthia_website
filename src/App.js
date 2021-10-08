import "./App.css";
import Index from "./components/Home.js";
import Privacy from "./components/Privacy.js";
import useDocumentTitle from "./components/useDocumentTitle";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useDocumentTitle("Synthia");
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <Switch location={location}>
                <Route path="/" exact component={Index} />
                <Route path="/home" exact component={Index} />
                <Route path="/privacy" component={Privacy} />
              </Switch>
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
