import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Post} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
