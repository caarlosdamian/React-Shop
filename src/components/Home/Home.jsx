import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import HomeCard from "../HomeCard";
import { getCollections } from "../../redux/selectors/index";
import useStyles from "./home.css";

const Home = () => {
  const classes = useStyles();
  const { products } = useSelector(getCollections);
  const datafilter = [
    ...products
      ?.reduce((map, obj) => map.set(obj.col_id, obj), new Map())
      .values(),
  ];
  return (
    <Grid container spacing={4} className={classes.root}>
      {datafilter.map((item) => {
        return (
          <Grid key={item.col_id} item xs={12} sm={4}>
            <HomeCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
