import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    borderRadius:"10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  pos: {
    marginBottom: 12,
  },
});
export default useStyles;
