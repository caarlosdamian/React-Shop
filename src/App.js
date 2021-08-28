import { Grid } from "@material-ui/core";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import GetData from "./api/getData";
import { useEffect, useState } from "react";
import Provider from "./redux/Provider";

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    GetData().then((res) => {
      setdata(res);
    });
  }, []);

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
                <Route path="/" exact>
                  <Home data={data} />
                </Route>
                <Route path="/store/:id" exact>
                  <Content data={data} />
                </Route>
                <Route path="/" data={data} exact component={Home} />
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
