import { Grid } from "@material-ui/core";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Provider from "./redux/Provider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {

  return (
    <Provider>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item sm={8} xs={12}>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login} />
                <Route path="/store/:id" exact component={Content} />
              </Switch>
            </Grid>
            <Grid item xs={false} sm={2} />{" "}
          </Grid>
        </Grid>
      </Router>
    </Provider>
  );
}

export default App;
