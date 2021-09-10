import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  registerForm: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8em",
    height: "44em",
  },
  col: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: "30px",
    border: "1px solid #8080805e",
    borderRadius: "15px",
  },
  registerText: {
    margin: "3em",
    fontSize: "35px",
    fontWeight: "bold",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  },
  formGgroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  Link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  btn: {
    backgroundColor: "#6BA8F6",
    marginBottom: "20px",
    width: "420px",
    "&:hover": {
      background: "#4086DF",
    },
  },
  span: {
    fontSize: "16px",
    textDecoration: "none",
    marginRight: "5px",
  },
}));
