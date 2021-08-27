import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import useStyles from "./card.css";
import { Avatar, CardMedia } from "@material-ui/core";

const CardItem = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item?.title[0]}
            </Avatar>
          }
          title={item?.name}
        />
        <CardContent>
          <CardMedia
            className={classes.media}
            image={item?.imageUrl}
            title="item-img"
          />

          <Typography variant="h5" component="h2">
            ${item?.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{ color: "#F59F9F" }}>
            Add to Car
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardItem;
