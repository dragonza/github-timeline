import React from "react";
import { useQuery, gql } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  timelineWrapper: {
    position: "relative",
    listStyleType: "none",
  },
  loadMoreWrapper: {
    textAlign: "center",
  },
  loadMoreButton: {
    minWidth: "120px",
  },
}));

const GET_USER_REPO = gql`
  query($username: String!, $cursor: String) {
    user(login: $username) {
      repositories(
        after: $cursor
        first: 12
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
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

const RepoList = ({ username = "" }) => {
  const classes = useStyles();

  const { loading, error, data, fetchMore } = useQuery(GET_USER_REPO, {
    variables: { username },
    notifyOnNetworkStatusChange: true,
  });
  const handleLoadMore = () => {
    const { endCursor } = data.user.repositories.pageInfo;
    fetchMore({
      variables: { cursor: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return {
          ...prevResult.user,
          user: {
            repositories: {
              ...fetchMoreResult.user.repositories,
              edges: [
                ...prevResult.user.repositories.edges,
                ...fetchMoreResult.user.repositories.edges,
              ],
            },
          },
        };
      },
    });
  };
  if (loading && !data) {
    return <CircularProgress />;
  }

  if (error) {
    console.log("error", error.toString());
    return (
      <Typography variant="body1" color="error">
        {error.toString()}
      </Typography>
    );
  }
  if (!data.user.repositories.totalCount) {
    return (
      <Typography variant={"overline"}>
        There are no repositories for this username yet!
      </Typography>
    );
  }
  console.log("list Render ===============");
  console.log("data", data);

  return (
    <Box className={classes.timelineWrapper} component="ul" p={0}>
      {data.user.repositories.edges.map(({ node }) => (
        <RepoItem
          createdAt={node.createdAt}
          key={node.id}
          name={node.name}
          description={node.description}
        />
      ))}

      <Box className={classes.loadMoreWrapper} mt={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLoadMore}
          className={classes.loadMoreButton}
        >
          {loading ? <CircularProgress size={30} /> : "Load more"}
        </Button>
      </Box>
    </Box>
  );
};

RepoList.propTypes = {
  username: PropTypes.string.isRequired,
};

export default React.memo(RepoList);
