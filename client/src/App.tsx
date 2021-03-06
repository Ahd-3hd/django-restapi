import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
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
