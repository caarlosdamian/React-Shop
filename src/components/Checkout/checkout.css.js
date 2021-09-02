import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: "5rem",
  },
  table: {
    minWidth: 650,
  },
  icon: {
    cursor: "pointer",
    borderRadius: "10px",
    transition: "transform .2s",
    fontSize:"15px",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
  span: {
    fontSize: "15px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  media: {
    height: "6rem",
    weight: "20rem",
  },
  total: {
    marginLeft: "46rem",
    fontSize: "30px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  button: {
    marginLeft: "45rem",
    background: "black",
    marginTop: "1em",
    color: "white",
    fontWeight: "bold",
    width: "12rem",
    padding: "10px",
  },
}));

export default useStyles;
