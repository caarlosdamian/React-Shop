import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import CardItem from "../Card";
import { createBrowserHistory } from "history";
import { getCollections } from "../../redux/selectors";

const Content = () => {
  const { products } = useSelector(getCollections)
  const historia = createBrowserHistory();
  const path = historia.location.pathname.slice(7);
  const datafilter = [...products?.filter(({ title }) => title === path)];

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
