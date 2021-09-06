import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../Card/CardItem";

const Store = () => {
  const products = useSelector((state)=>state.collectionReducer.collection.data);
  const top5 = (array, num) => {
    const filter = array.filter((item) => item.col_id === num);
    const [item1, item2, item3, item4, item5] = filter;
    let newarray = [item1, item2, item3, item4, item5];
    return newarray;
  };
  const hatsTop = top5(products, 1);
  const jacketsTop = top5(products, 2);
  const mensTop = top5(products, 3);
  const sneakersTop = top5(products, 4);
  const womensTop = top5(products, 5);

  return (
    <>
    {products.length ? <div style={{ marginTop: "100px" }}>
      <Link
        to={`/store/${hatsTop[0]?.title}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {hatsTop[0]?.title}
        </h1>
      </Link>

      <Grid container spacing={2}>
        {hatsTop?.map((item) => {
          return (
            <Grid key={item?.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>

      <Link
        to={`/store/${sneakersTop[0]?.title}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {sneakersTop[0]?.title}
        </h1>
      </Link>
      <Grid container spacing={2}>
        {sneakersTop?.map((item) => {
          return (
            <Grid key={item?.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>

      <Link
        to={`/store/${mensTop[0]?.title}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mensTop[0]?.title}
        </h1>
      </Link>
      <Grid container spacing={2}>
        {mensTop?.map((item) => {
          return (
            <Grid key={item?.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>

      <Link
        to={`/store/${jacketsTop[0]?.title}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {jacketsTop[0]?.title}
        </h1>
      </Link>
      <Grid container spacing={2}>
        {jacketsTop?.map((item) => {
          return (
            <Grid key={item?.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Link
        to={`/store/${womensTop[0]?.title}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {womensTop[0]?.title}
        </h1>
      </Link>
      <Grid container spacing={2}>
        {womensTop?.map((item) => {
          return (
            <Grid key={item?.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div> : <h3>Loading...</h3>}
    </>
  );
};

export default Store;
