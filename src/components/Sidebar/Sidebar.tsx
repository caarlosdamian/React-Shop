import { Avatar, Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./sidebar.css";
import {
  remove_item,
  add_item,
  decrease_item,
  clear_cart,
  get_total,
} from "../../redux/cart/reducer";
import { Link } from "react-router-dom";
const Sidebar = ({ setisToggle, isToggle, cartProducts }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(get_total());
  }, [dispatch, cartProducts]);

  const clearCart = () => {
    dispatch(clear_cart());
    setisToggle(false);
  };
  return (
    <div className={isToggle ? classes.Sidebar : classes.shrink}>
      {cartProducts.length === 0 ? (
        <div className={classes.header}>
          <Typography>Empty cart</Typography>
          <ClearIcon
            className={classes.icon}
            onClick={() => setisToggle(false)}
          />
        </div>
      ) : (
        <div className={classes.header}>
          <Typography>Shopping cart</Typography>

          <ClearIcon
            className={classes.icon}
            onClick={() => setisToggle(false)}
          />
        </div>
      )}
      <hr></hr>
      {cartProducts?.map((item) => (
        <div key={item.item_id} className={classes.card}>
          <Avatar alt="Remy Sharp" src={item.imageUrl} />

          <div className={classes.cardBody}>
            <div className={classes.cardRow}>
              <span className={classes.cardTitle}>{item.name}</span>
              <span className={classes.cardTitle}>
                $ {item.cartQuantity * item.price}
              </span>

              <ClearIcon
                className={classes.icon}
                onClick={() => dispatch(remove_item(item))}
              />
            </div>
            <div className={classes.cardRow}>
              <span className={classes.cardTitle}>
                <RemoveIcon
                  className={classes.icon}
                  fontSize="small"
                  onClick={() => dispatch(decrease_item(item))}
                />
              </span>
              <span className={classes.cardTitle}>{item.cartQuantity}</span>
              <span className={classes.cardTitle}>
                <AddIcon
                  className={classes.icon}
                  fontSize="small"
                  onClick={() => dispatch(add_item(item))}
                />
              </span>
              <span className={classes.cardTitle}></span>
            </div>
          </div>
        </div>
      ))}
      {cartProducts.length === 0 ? (
        <div></div>
      ) : (
        <>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setisToggle(false)}
          >
            <Link className={classes.link} to="/checkout">
              checkout
            </Link>
          </Button>
          <Button
            className={classes.buttonRed}
            onClick={clearCart}
            size="small"
          >
            Clear car
          </Button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
