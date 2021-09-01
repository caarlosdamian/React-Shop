import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { CardContent, CardMedia } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import {
    removeCartItem,
  } from "../../redux/actions/cartActions";

import { useSelector, useDispatch } from 'react-redux';
import { getCartProducts } from '../../redux/selectors'; 
import ModalForm from '../Modal/ModalForm';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, description, quantity, price, remove) {
  return { name, description, quantity, price, remove };
}

export default function DenseTable({cartProducts}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(getCartProducts);
  console.log(products);

const total = products.map(({price, quantity}) => price * quantity)

const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <>
        <TableContainer component={Paper} style={{marginTop: '4rem'}}>
        <Table className={classes.table} size="small" aria-label="a dense table">
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
                    <CardContent
                        // style={{weight: "20rem"}}
                    >
                        <CardMedia 
                        style={{
                            height: "6rem",
                            weight: "20rem",
                            }}
                            className={classes.media}
                            image={item?.imageUrl}
                            title="item-img"
                        >{item.image}</CardMedia>
                    </CardContent>
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">$ {item.quantity * item.price}</TableCell>
                <TableCell align="right">
                <Button
                        size="small"
                    >
                        <ClearIcon
                            onClick={() => dispatch(removeCartItem(item.item_id))}
                        />
                    </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <p style={{
                marginLeft: '46rem',
                fontSize: '30px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
        }}>Total: $ {total.reduce((acc, curr) => (acc + curr), 0)} </p>
        <Button
        style={{marginLeft: '45rem',
                background: 'black',
                marginTop: '1em',
                color: 'white',
                fontWeight: 'bold',
                width: '12rem',
                padding: '10px'
        }}
            size="medium"
        >
          <ModalForm/>
        </Button>
    </>
  );
}


