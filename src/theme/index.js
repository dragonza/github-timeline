import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  card: {
    main: "#599497",
    rightArrowWidth: "10px 12px 10px 0",
    leftArrowWidth: "10px 0 10px 12px",
    text: "#fff",
    width: "250px",
  },
  timeline: {
    background: "#d95655",
  },
});

export default theme;
