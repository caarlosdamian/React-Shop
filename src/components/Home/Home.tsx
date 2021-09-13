import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { CollectionState } from "../../types";
import HomeCard from "../HomeCard";
import Spinner from "../Spinner/Spinner";
import useStyles from "./home.css";

const Home = () => {
  const classes = useStyles();
  const { data } = useSelector(
    (state: { collectionReducer: CollectionState }) =>
      state.collectionReducer.collection
  );
  const datafilter = [
    ...data?.reduce((map, obj) => map.set(obj.col_id, obj), new Map()).values(),
  ];
  return (
    <Grid container spacing={4} className={classes.root}>
      {datafilter.length ? (
        datafilter.map((item) => {
          return (
            <Grid key={item.col_id} item xs={12} sm={4}>
              <HomeCard item={item} />
            </Grid>
          );
        })
      ) : (
        <Spinner />
      )}
    </Grid>
  );
};

export default Home;
