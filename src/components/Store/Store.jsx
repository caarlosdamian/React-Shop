import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCollections } from "../../redux/selectors";
import CardItem from "../Card/CardItem";

const Store = () => {
  const { products } = useSelector(getCollections);
  const top5 = (array) => {
    const [item1, item2, item3, item4, item5] = array;
    let newarray = [item1, item2, item3, item4, item5];
    return newarray;
  };
  const hats = products.filter((item) => item.col_id === 1);
  const hatsTop = top5(hats);
  const jackets = products.filter((item) => item.col_id === 2);
  const jacketsTop = top5(jackets);
  const mens = products.filter((item) => item.col_id === 3).slice(1);
  const mensTop = top5(mens);
  const sneakers = products.filter((item) => item.col_id === 4).slice(3);
  const sneakersTop = top5(sneakers);
  const womens = products.filter((item) => item.col_id === 5).slice(2);
  const womensTop = top5(womens);

  return (
    <div style={{marginTop:"100px"}}>
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
            <Grid key={item.item_id} item xs={12} lg={4} sm={8}>
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
            <Grid key={item.item_id} item xs={12} lg={4} sm={8}>
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
            <Grid key={item.item_id} item xs={12} lg={4} sm={8}>
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
            <Grid key={item.item_id} item xs={12} lg={4} sm={8}>
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
            <Grid key={item.item_id} item xs={12} lg={4} sm={8}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Store;
