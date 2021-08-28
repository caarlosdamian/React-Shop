import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./home.css";

const HomeCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Link to={`/store/${item.title}`} style={{textDecoration:"none"}}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <CardMedia
            className={classes.media}
            image={item.imageUrl}
            title="item-img"
          />
          <Typography  className={classes.typo} variant="h5" component="h2">
            {item.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HomeCard;
