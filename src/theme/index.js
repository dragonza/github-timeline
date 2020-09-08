import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  card: {
    main: "#e49643",
    rightArrowWidth: "10px 12px 10px 0",
    leftArrowWidth: "10px 0 10px 12px",
    text: "#fff",
    width: "250px",
  },
  timeline: {
    background: "#357575",
  },
});

export default theme;
