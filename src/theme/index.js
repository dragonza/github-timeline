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

theme.typography.h1 = {
  fontSize: "5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2.5rem",
  },
};

export default theme;
