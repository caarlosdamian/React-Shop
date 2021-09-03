import LocalMallIcon from "@material-ui/icons/LocalMall";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCollections } from "../../redux/actions/getCollections";
import { getAuth, getCartProducts } from "../../redux/selectors";
import { getTotalQuantityCart } from "../../utils/totals";
import useStyles from "./header.css";
import Sidebar from "../Sidebar/Sidebar";
import { logout, validateSession } from "../../redux/actions/userActions";

export default function Header({ setisToggle, isToggle }) {
  const cartProducts = useSelector(getCartProducts);
  const { loggedIn } = useSelector(getAuth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const savedToken = localStorage.getItem('token') ?? null

  const menuId = "primary-search-account-menu";
  useEffect(() => {
    dispatch(fetchCollections())
    savedToken && dispatch(validateSession(savedToken))
  }, [dispatch, savedToken])

  const totalQuantityCart = getTotalQuantityCart(cartProducts);

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#F5F3F8", color: "black" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            fontSize="large"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.Link}>
            <Typography className={classes.title} variant="h5" noWrap>
              Fake Store
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/store" className={classes.Link}>
              <IconButton color="inherit">
                <Typography className={classes.title} variant="h6" noWrap>
                  STORE
                </Typography>
              </IconButton>
            </Link>

            <IconButton color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                {loggedIn ? (
                  <span
                    onClick={() => dispatch(logout())}
                    className={classes.Link}
                  >
                    LOGOUT
                  </span>
                ) : (
                  <Link to="/login" className={classes.Link}>
                    LOGIN
                  </Link>
                )}
              </Typography>
            </IconButton>
            <IconButton
              onClick={() => setisToggle(true)}
              edge="end"
              aria-label="show 4 new items"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <LocalMallIcon className={classes.icon} />
              {totalQuantityCart > 0 && (
                <span className={classes.span}>
                  {totalQuantityCart > 0 ? totalQuantityCart : ""}
                </span>
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Sidebar
        cartProducts={cartProducts}
        setisToggle={setisToggle}
        isToggle={isToggle}
      />
    </div>
  );
}
