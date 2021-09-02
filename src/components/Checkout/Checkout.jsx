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
import {
  removeCartItem,
  updateItemQuantity,
} from "../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "../../redux/selectors";
import ModalForm from "../Modal/ModalForm";
import useStyles from "./checkout.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";

export default function DenseTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(getCartProducts);
  const total = products.map(({ price, quantity }) => price * quantity);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
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
              <TableRow key={products.name}>
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
                    <RemoveIcon
                      className={classes.icon}
                      fontSize="small"
                      onClick={() =>
                        dispatch(
                          updateItemQuantity(item.item_id, item.quantity - 1)
                        )
                      }
                    />
                    <span className={classes.span}>{item.quantity}</span>
                    <AddIcon
                      className={classes.icon}
                      fontSize="small"
                      onClick={() =>
                        dispatch(
                          updateItemQuantity(item.item_id, item.quantity + 1)
                        )
                      }
                    />
                  </>
                </TableCell>
                <TableCell align="right">
                  <span className={classes.span}>
                    $ {item.quantity * item.price}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <ClearIcon
                    className={classes.icon}
                    onClick={() => dispatch(removeCartItem(item.item_id))}
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
