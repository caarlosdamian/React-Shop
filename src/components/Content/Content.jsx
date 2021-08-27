import { Grid } from "@material-ui/core";
import React from "react";
import CardItem from "../Card/CardItem";

const data = [
  {
    col_id: 1,
    title: "Hats",
    item_id: 2,
    name: "Blue Beanie",
    price: 18,
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
  },
  {
    col_id: 1,
    title: "Hats",
    item_id: 9,
    name: "Blue Snapback",
    price: 16,
    imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
  },
  {
    col_id: 1,
    title: "Hats",
    item_id: 1,
    name: "Brown Brim",
    price: 25,
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
  },
  {
    col_id: 1,
    title: "Hats",
    item_id: 3,
    name: "Brown Cowboy",
    price: 35,
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
  },
  {
    col_id: 1,
    title: "Hats",
    item_id: 5,
    name: "Green Beanie",
    price: 18,
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
  },
  {
    col_id: 1,
    title: "Hats",
    item_id: 4,
    name: "Grey Brim",
    price: 25,
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
  },
];

const Content = () => {
  return (
    <>
      <h1 style={{display:"flex", alignItems:"center",justifyContent:"center"}}>{data[0].title}</h1>
      <Grid container spacing={4}>
        {data.map((item) => {
          return (
            <Grid item xs={12} sm={4}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Content;
