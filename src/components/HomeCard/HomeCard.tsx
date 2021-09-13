import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CartItemValues } from "../../types";
import useStyles from "./home.css";

interface Props {
  item: CartItemValues;
}
const HomeCard: React.FC<Props> = ({ item }) => {
  const classes = useStyles();
  return (
    <Link to={`/store/${item?.title}`} style={{ textDecoration: "none" }}>
      <Card
        className={`${classes.root} animate__animated animate__fadeIn`}
        variant="outlined"
      >
        <CardContent>
          <CardMedia
            className={classes.media}
            image={item?.imageUrl}
            title="item-img"
          />
          <Typography className={classes.typo} variant="h5" component="h2">
            {item?.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HomeCard;
