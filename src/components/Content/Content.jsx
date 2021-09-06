import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import CardItem from "../Card";
import { createBrowserHistory } from "history";

const Content = () => {
  const products = useSelector(
    (state) => state.collectionReducer.collection.data
  );
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
          marginTop: "100px",
        }}
      >
        {datafilter[0]?.title}
      </h1>
      <Grid container spacing={4} className="animate__animated animate__fadeIn">
        {datafilter?.map((item) => {
          return (
            <Grid key={item.item_id} item xs={12} sm={4}>
              <CardItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Content;
