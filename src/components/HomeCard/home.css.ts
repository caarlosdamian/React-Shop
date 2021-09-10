import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    position: "relative",
    border:"none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
  },
  pos: {
    marginBottom: 12,
  },
  typo: {
    color: 'white',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    backgroundColor: "rgba(0 , 0, 0, 0.5)",
    borderRadius: "10px",
    transition: "all 0.5s ease-out",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .8)",
      color: "black"
    },
  },
});
export default useStyles;
