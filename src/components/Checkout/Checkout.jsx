import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { CardContent, CardMedia } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import {
  get_total,
  add_item,
  decrease_item,
  remove_item,
} from "../../redux/cart/reducer";
import ModalForm from "../Modal/ModalForm";
import useStyles from "./checkout.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";

export default function DenseTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartReducer.items);

  const total = products.map(({ price, cartQuantity }) => price * cartQuantity);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const decreaseItem = (item) => {
    dispatch(decrease_item(item));
    dispatch(get_total());
  };
  const incrementItem = (item) => {
    dispatch(add_item(item));
    dispatch(get_total());
  };
  const removeItem = (item) => {
    dispatch(remove_item(item));
    dispatch(get_total());
  };

  return (
    <>
      <TableContainer
        component={Paper}
        className={`${classes.root} animate__animated animate__fadeIn`}
      >
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow key={item.item_id}>
                <TableCell component="th" scope="products">
                  <CardContent>
                    <CardMedia
                      className={classes.media}
                      image={item?.imageUrl}
                      title="item-img"
                    >
                      {item.image}
                    </CardMedia>
                  </CardContent>
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>

                <TableCell align="right">
                  <>
                    {item.cartQuantity > 1 ? (
                      <RemoveIcon
                        className={classes.icon}
                        fontSize="small"
                        onClick={() => decreaseItem(item)}
                      />
                    ) : null}
                    <span className={classes.span}>{item.cartQuantity}</span>
                    <AddIcon
                      className={classes.icon}
                      fontSize="small"
                      onClick={() => incrementItem(item)}
                    />
                  </>
                </TableCell>
                <TableCell align="right">
                  <span className={classes.span}>
                    $ {item.cartQuantity * item.price}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <ClearIcon
                    className={classes.icon}
                    onClick={() => removeItem(item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className={classes.total}>
        Total: $ {total.reduce((acc, curr) => acc + curr, 0)}{" "}
      </p>
      <Button onClick={handleOpen} className={classes.button} size="medium">
        PROCESS PAYMENT
      </Button>

      <ModalForm open={open} setOpen={setOpen} />
    </>
  );
}
