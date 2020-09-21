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
  header: {
    background: "#e94947",
    color: "white",
  },
  mainContent: {
    minHeight: "80vh",
  },
}));

function App() {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const handleSubmit = (name) => {
    setUsername(name);
  };
  return (
    <ApolloProvider className="App" client={client}>
      <CssBaseline />
      <header className={classes.header}>
        <Container>
          <Typography variant="h1" gutterBottom>
            Github Timeline
          </Typography>
        </Container>
      </header>
      <Container fixed className={classes.mainContent}>
        <Typography variant="h5" gutterBottom className={classes.instruction}>
          Enter your username to see the history of your GitHub activities
        </Typography>
        <SearchBar onSubmit={handleSubmit} />
        {username && <RepoList username={username} />}
      </Container>
      <footer className={classes.footer}>
        <Container>
          <Typography variant="h6" gutterBottom>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤
            </span>
            ️ by <a href="https://github.com/dragonza">dragonza</a>
          </Typography>
        </Container>
      </footer>
    </ApolloProvider>
  );
}

export default App;
