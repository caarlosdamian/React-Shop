import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./sidebar.css";
import {
  removeCartItem,
  updateItemQuantity,
  cleanCart,
} from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
const Sidebar = ({ setisToggle, isToggle, cartProducts }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
                $ {item.quantity * item.price}
              </span>

              <ClearIcon
                className={classes.icon}
                onClick={() => dispatch(removeCartItem(item.item_id))}
              />
            </div>
            <div className={classes.cardRow}>
              <span className={classes.cardTitle}>
                <RemoveIcon
                  className={classes.icon}
                  fontSize="small"
                  onClick={() =>
                    dispatch(
                      updateItemQuantity(item.item_id, item.quantity - 1)
                    )
                  }
                />
              </span>
              <span className={classes.cardTitle}>{item.quantity}</span>
              <span className={classes.cardTitle}>
                <AddIcon
                  className={classes.icon}
                  fontSize="small"
                  onClick={() =>
                    dispatch(
                      updateItemQuantity(item.item_id, item.quantity + 1)
                    )
                  }
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
            onClick={() => dispatch(cleanCart())}
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
