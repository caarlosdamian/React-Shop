import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#6BA8F6",
    marginBottom:"20px",
    width: "420px",
    '&:hover': {
        background: "#4086DF",
     },
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "60px",
    height: "40em",
  },
  col: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: "30px",
    border: "1px solid #8080805e",
    borderRadius: "15px",
  },
  loginText: {
    margin: "3em 4em 2em 4em",
    fontSize: "35px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    fontWeight: "bold",
    color: "#363232",
  },
  formGgroup:{
      display:"flex",
      flexDirection:"column",
      marginBottom:"20px"
  },
  Link:{
      textDecoration:"none"
  },
  span:{
    fontSize:"16px",
    textDecoration:"none",
    '&:hover': {
        textDecoration:"underline"
     },
  }
}));

// .form-control{
//     margin-top: 8px;
//     padding: 8px;
//     font-size: 14px;
//     border: none;
//     border-radius: 10px;

// }

// .form-links{
//     display: flex;
//     justify-content: space-between;
//     margin-top: 3em;
//     margin-bottom: 2em;
// }
// .btn {
//   width: 100%;
// }

// .second-btn {
//     text-decoration: none;
//     font-size: 20px;
//     width: 30%;
//     text-align: center;
//     padding: 8px;
//     border-radius: 5px;
//     background: #ffa500c2;
//     border: none;
// }
// .span{
//     font-size: 16px;
// }
// Link{
//     text-decoration: none;
// }
