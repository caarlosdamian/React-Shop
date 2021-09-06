import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = ({ size = 50, thickness = 5 }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    >
      <CircularProgress size={size} thickness={thickness} disableShrink />
    </div>
  );
};

export default Spinner;
