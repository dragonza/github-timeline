import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    background: theme.timeline.background,
    margin: "0 auto",
    height: "100%",
    textAlign: "center",
    width: theme.spacing(1),
    position: "relative",
    paddingTop: theme.spacing(5),

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
        <Typography gutterBottom>{createdAt}</Typography>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
      </Card>
    </li>
  );
}

export default RepoItem;
