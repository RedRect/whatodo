import React from "react";
import {makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CardContent from "@material-ui/core/CardContent";
import Todos from "./Todos";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '90%'
    },
}));
export default function FormTodo(){
    const classes = useStyles();

    return(
      <React.Fragment>
          <CssBaseline />

          <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>

                      <Grid  xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                              <CardHeader
                                  action={
                                      <IconButton aria-label="settings">
                                          <PostAddSharpIcon />
                                      </IconButton>
                                  }
                                  title="Add new tasks"

                              />
                              <CardContent className={classes.cardContent}>

                                  <TextField
                                      required
                                      id="outlined-required"
                                      label="Required"
                                      className={classes.textField}
                                      margin="normal"
                                      variant="outlined"
                                  />
                              </CardContent>
                              <CardActions>
                                  <Button size="small">September 14, 2016</Button>
                              </CardActions>
                          </Card>
                      </Grid>

              </Grid>
          </Container>

      </React.Fragment>
    );
}