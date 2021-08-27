import { Grid } from "@material-ui/core";
import React from "react";
import CardItem from "../Card/CardItem";
import { createBrowserHistory } from "history";

const Content = ({ data }) => {
  const historia = createBrowserHistory();
  const path = historia.location.pathname.slice(7);
  const datafilter = [...data?.filter((item) => item.title === path)];

  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {datafilter[0]?.title}
      </h1>
      <Grid container spacing={4}>
        {datafilter?.map((item) => {
          return (
            <Grid key={item.item_id}item xs={12} sm={4}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Content;
