import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
  const handleSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Sale Completed",
      showConfirmButton: false,
      timer: 1000,
    });
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div align="center">
              <h2>Payment Form</h2>
            </div>
            <TextField
              label="credit card"
              type="number"
              className="classes.textfield"
              style={{ width: "15rem" }}
            />
            <br />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <TextField
                label="exp date"
                type="string"
                className="classes.textfield"
                style={{ width: "8rem", marginRight: "2rem" }}
              />
              <TextField
                label="cvv"
                type="number"
                className="classes.textfield"
                style={{ width: "5rem" }}
              />
            </div>
            <br />
            <TextField
              label="name"
              type="string"
              className="classes.textfield"
              style={{ width: "16rem" }}
            />
            <br />
            <br />
            <div align="center">
              <Button color="primary" onClick={handleSuccess}>
                Pay
              </Button>
              <Button color="primary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
