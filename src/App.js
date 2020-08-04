import React from "react";
import "./App.css";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import RepoList from "./components/RepoList";
import { CssBaseline } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  instruction: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const handleSubmit = (name) => {
    console.log("name", name);
    setUsername(name);
  };
  return (
    <ApolloProvider className="App" client={client}>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h5" gutterBottom className={classes.instruction}>
          Enter your username to see the visual history of your GitHub
          activities
        </Typography>
        <SearchBar onSubmit={handleSubmit} />
        {username && <RepoList username={username} />}
      </Container>
    </ApolloProvider>
  );
}

export default App;
