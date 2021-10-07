import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "modules/main/presentation/search";
import Home from "modules/main/presentation/home";
import LikesPage from "modules/main/presentation/likes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/likes" component={LikesPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
