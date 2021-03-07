import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Single from "./components/Single";
import Logout from "./components/Logout";
import { useEffect, useState } from "react";
import axiosInstance from "./axios";
import { IPost } from "./types";

function App() {
  const [appState, setAppState] = useState<{
    loading: boolean;
    posts: IPost[] | null;
  }>({
    loading: true,
    posts: null,
  });
  useEffect(() => {
    axiosInstance.get("http://127.0.0.1:8000/api/").then((res) => {
      const allPosts = res.data;
      setAppState({ loading: false, posts: allPosts });
      console.log(res.data);
    });
  }, [setAppState]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Posts posts={appState.posts} isLoading={appState.loading} />
          )}
        />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/login" component={Logout} />
        <Route path="/post/:slug" component={Single} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
