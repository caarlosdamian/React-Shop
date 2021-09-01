import { Grid } from "@material-ui/core";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Provider from "./redux/Provider";
import Login from "./components/Login";
import Register from "./components/Register/Register";
import Checkout from "./components/Checkout/Checkout";
import ModalForm from './components/Modal/ModalForm';
import { useState } from "react";
import Store from "./components/Store/";

function App() {
  const [isToggle, setisToggle] = useState(false);

  return (
    <Provider>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header isToggle={isToggle} setisToggle={setisToggle} />
          </Grid>
          <Grid item container onClick={() => setisToggle(false)}>
            <Grid item xs={false} sm={2} />
            <Grid item sm={8} xs={12} lg={8}>
              <Switch>
              <Route path="/store" exact component={Store} />
                <Route path="/" exact component={Home} />
                <Route path="/modal" exact component={ModalForm}/>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/register" exact component={Register} />
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
