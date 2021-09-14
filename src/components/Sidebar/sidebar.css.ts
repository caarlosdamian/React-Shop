import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
    Sidebar: {
      zIndex: 200000,
      width: "250px",
      background: "white",
      top: "0",
      right: "0",
      padding: " 25px",
      position: "fixed",
      overflow: "auto",
      height: "100%",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      transition: "all ease-in 0.5s",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 300,
      fontSize: "24px",
      textTransform: "uppercase",
      position: "relative",
      padding: "15px 0",
      "&.after": {
        content: "",
        poition: "absolute",
        bottom: "0",
        left: "0",
        height: "1px",
        width: "100%",
        background: "#000000",
      },
    },
    icon:{
      cursor: "pointer",
    },
    shrink: {
      zIndex: 1000,
      width: "250px",
      background: "white",
      top: "0",
      right: "-400px",
      padding: " 25px",
      position: "fixed",
      overflow: "auto",
      height: "100%",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      transition: "all ease-in 0.5s",
    },
    empty: {
      position: block,
      top: "50%",
      left: "50%",
      transform: "translate(-50, -50%)",
      fontSize: "24px",
    },
    card: {
      display: "flex",
      position: "relative",
      margin: "35px 0 75px 0",
    },
    cardImg: {
      flex: 1,
      height: "80px",
      width: "10px",
      borderRadius: "50%",
      maxWidth: "100px",
      maxHeight: "100px",
    },
    cardBody: {
      flex: "2",
      marginLeft: "5px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    cardRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    cardTitle: {
      fontSize: "14px",
      fontWeight: 500,
    },
    button:{
      marginRight:"3px",
      textDecoration:"none",
      height: "28px",
    },
    buttonRed:{
      marginRight:"3px",
      textDecoration:"none",
      height: "28px",
      backgroundColor:"#C70039",
      color:"white",
      '&:hover': {
        backgroundColor: 'gray',
        color: '#3c52b2',
    },
  
    },
    link:{
      textDecoration:"none",
      color:"white"
    }
  }));

export default useStyles;
