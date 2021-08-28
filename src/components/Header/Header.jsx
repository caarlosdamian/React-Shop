import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCollections } from "../../redux/actions/getCollections";
import useStyles from "./header.css";

export default function Header() {
  const dispatch = useDispatch()
  const classes = useStyles();

  const menuId = "primary-search-account-menu";
  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#F5F3F8", color: "black" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"  className={classes.Link}>
          <Typography className={classes.title} variant="h5" noWrap>
            Fake Store
          </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/store"  className={classes.Link}>
              <IconButton color="inherit">
                <Typography className={classes.title} variant="h6" noWrap>
                  STORE
                </Typography>
              </IconButton>
            </Link>

            <IconButton color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                SING UP
              </Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="show 4 new items"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
