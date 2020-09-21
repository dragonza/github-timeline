import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
}));

export default function SearchBar(props) {
  const [query, setQuery] = React.useState("");

  const classes = useStyles();

  const handleText = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(query);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid item sm={10} xs={12}>
              <TextField
                value={query}
                id="outlined-basic"
                label="username"
                variant="outlined"
                fullWidth
                onChange={handleText}
              />
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={!query.length}
                type="submit"
                fullWidth
              >
                Generate
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
