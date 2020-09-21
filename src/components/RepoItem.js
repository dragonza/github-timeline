import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { formatDate } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  item: {
    background: theme.timeline.background,
    marginLeft: 0,
    height: "100%",
    textAlign: "center",
    width: theme.spacing(1),
    position: "relative",
    paddingTop: theme.spacing(5),

    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
    },

    "&:before": {
      width: "30px",
      height: "30px",
      content: "''",
      position: "absolute",
      left: "50%",
      background: theme.card.main,
      transform: "translateX(-50%)",
      borderRadius: "100%",
      bottom: "1px",
    },

    "&:nth-child(odd) > $card": {
      left: theme.spacing(4),

      "&:after": {
        left: "-11px",
        borderWidth: theme.card.rightArrowWidth,
        borderColor: `transparent ${theme.card.main} transparent transparent`,
        borderStyle: "solid",
      },
    },

    "&:nth-child(even) > $card": {
      left: "-282px",

      "&:after": {
        right: "-11px",
        borderWidth: theme.card.leftArrowWidth,
        borderColor: `transparent transparent transparent ${theme.card.main}`,
        borderStyle: "solid",
      },

      [theme.breakpoints.down("xs")]: {
        left: "32px",

        "&:after": {
          left: "-11px",
          borderWidth: theme.card.rightArrowWidth,
          borderColor: `transparent ${theme.card.main} transparent transparent`,
        },
      },
    },
  },
  cardRoot: {
    overflow: "inherit",
  },
  card: {
    position: "relative",
    background: theme.card.main,
    width: theme.card.width,
    textAlign: "left",
    padding: theme.spacing(2),
    color: theme.card.text,

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: theme.spacing(1),
      width: 0,
      height: 0,
    },

    [theme.breakpoints.down("xs")]: {
      width: "calc(100vw - 91px)",
    },
  },
}));
RepoItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string,
};

function RepoItem(props) {
  const classes = useStyles();
  const { createdAt, description, name } = props;
  return (
    <li className={classes.item}>
      <Card
        className={classes.card}
        variant="outlined"
        classes={{ root: classes.cardRoot }}
      >
        <Typography component="div" gutterBottom>
          <Box fontSize="h6.fontSize" fontWeight="bold">
            {formatDate(createdAt)}
          </Box>
        </Typography>

        <Typography component="div" gutterBottom>
          <Box fontSize="body1.fontSize" color="black">
            {name}
          </Box>
        </Typography>
        <Typography>{description}</Typography>
      </Card>
    </li>
  );
}

export default RepoItem;
