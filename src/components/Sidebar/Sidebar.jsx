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
const Sidebar = ({ isToggle, cartProducts }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={isToggle ? classes.Sidebar : classes.shrink}>
      {cartProducts > 0 ? (
        <div className={classes.header}>
          <Typography>Shopping car</Typography>
        </div>
      ) : (
        <div className={classes.header}>
          <Typography>Shopping car</Typography>
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
                onClick={() => dispatch(removeCartItem(item.item_id))}
              />
            </div>
            <div className={classes.cardRow}>
              <span className={classes.cardTitle}>
                <RemoveIcon
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
      <Button size="small" variant="contained" color="primary">
        checkout
      </Button>
      <Button
        onClick={() => dispatch(cleanCart())}
        size="small"
        variant="contained"
        color="secondary"
      >
        Clear car
      </Button>
      {/* <div className={classes.empty}>Empty Shopping car</div>  */}
    </div>
  );
};

export default Sidebar;
