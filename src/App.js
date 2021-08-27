import { Grid } from "@material-ui/core";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>

          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item sm={8} xs={12}>
              <Route path="/" exact component={Home} />
              <Route path="/store" exact component={Content} />
            </Grid>
            <Grid item xs={false} sm={2} />{" "}
          </Grid>
        </Grid>
      </Switch>
    </Router>
  );
}

export default App;
