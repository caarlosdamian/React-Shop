import { Grid } from "@material-ui/core";
import React from "react";
import HomeCard from "../HomeCard/HomeCard";

const Home = ({ data }) => {
  const datafilter = [
    ...data.reduce((map, obj) => map.set(obj.col_id, obj), new Map()).values(),
  ];
  return (
    <Grid container spacing={4}>
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
