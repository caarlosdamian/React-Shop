import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    top: 0,
    width: "100%",

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  Link: {
    textDecoration: "none",
    color: "black",
  },
  icon: {
    fontSize: "35px",
  },
  span: {
    fontSize: "12px",
    position: "absolute",
    color: "white",
    bottom: "15px",
    backgroundColor: "red",
    padding: "1px",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
  },

}));
export default useStyles;
