import React from "react";
import { useQuery, gql } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  timelineWrapper: {
    position: "relative",
    listStyleType: "none",
  },
}));

const GET_USER_REPO = gql`
  query($username: String!) {
    user(login: $username) {
      repositories(first: 50, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            id
            description
            createdAt
            name
          }
        }
      }
    }
  }
`;

const RepoList = ({ username = "test" }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_USER_REPO, {
    variables: { username },
  });
  console.log("loading", loading);
  console.log("username", username);
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    console.log("error", error.toString());
    return (
      <Typography variant="body1" color="error">
        Something is wrong. Please try again!
      </Typography>
    );
  }
  if (!data.user.repositories.totalCount) {
    return (
      <Typography variant={"overline"}>
        There are no such repositories!
      </Typography>
    );
  }
  console.log("list Render ===============");
  console.log("data", data);

  return (
    <Box className={classes.timelineWrapper} component="ul">
      {data.user.repositories.edges.map(({ node }) => (
        <RepoItem
          createdAt={node.createdAt}
          key={node.id}
          name={node.name}
          description={node.description}
        />
      ))}
    </Box>
  );
};

RepoList.propTypes = {
  username: PropTypes.string.isRequired,
};

export default React.memo(RepoList);
