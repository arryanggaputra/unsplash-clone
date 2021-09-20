import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "modules/main/presentation/search";
import Home from "modules/main/presentation/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
