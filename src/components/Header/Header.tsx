import LocalMallIcon from "@material-ui/icons/LocalMall";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./header.css";
import Sidebar from "../Sidebar/Sidebar";
import InstagramIcon from "@material-ui/icons/Instagram";
import { setToken, setUser, signOut } from "../../redux/auth/reducer";
import { loadCollection } from "../../redux/collection/reducer";
import { get_total } from "../../redux/cart/reducer";
import { Badge } from "@material-ui/core";
import { AuthState, CartState, HeaderComponent } from "../../types";

export default function Header({ setisToggle, isToggle }: HeaderComponent) {
  const dispatch = useDispatch();
  console.log(isToggle);
  const { items: cartProducts, Cart_Quantity: totalQuantityCart } = useSelector(
    (state: { cartReducer: CartState }) => state.cartReducer
  );
  const token = window.localStorage.getItem("token") ?? null;
  if (token) {
    dispatch(setToken(token));
    dispatch(setUser(true));
  }
  const { isAuth } = useSelector(
    (state: { authReducer: AuthState }) => state.authReducer
  );
  const classes = useStyles();
  const menuId = "primary-search-account-menu";
  useEffect(() => {
    dispatch(loadCollection());
    dispatch(get_total());
  }, [dispatch]);

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#F5F3F8", color: "black" }}
      >
        <Toolbar>
          <Link to="/" className={classes.Link}>
            <IconButton color="inherit">
              <InstagramIcon fontSize="medium" />
            </IconButton>
          </Link>

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
                {isAuth ? (
                  <span
                    onClick={() => dispatch(signOut())}
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
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Badge badgeContent={totalQuantityCart} color="secondary">
                <LocalMallIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Sidebar
        setisToggle={setisToggle}
        isToggle={isToggle}
        cartProducts={cartProducts}
      />
    </div>
  );
}
