import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "20px",
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    backgroundColor: "rgba(143 , 143, 143, 0.5)",
    borderRadius: "10px",
    transition: "all 0.5s ease-out",
    "&:hover": {
      backgroundColor: "rgba(162, 162, 162, .8)",
    },
  },
});
export default useStyles;
