import React, {useEffect} from "react";
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
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({

    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        width: '100%'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
        width: '100%'
    },
    datePicker:{
        // justify = "flex-end" alignItems = "center"
        // justify : 'flex-end',
        // alignItems : 'center'
        marginRight: theme.spacing(2),
    },
    fab:{
        marginLeft: theme.spacing(2),
    }
}));
export default function FormTodo(){
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(Date.now);
    const [todos, setTodos] = React.useState([""]);
    const [numTodo, setNumTodo ]= React.useState(1);
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const handleTodos  = (index) =>(event)=>{
        let temp = [...todos];
        const value =event.target.value;
        temp[index] = value;
        setTodos(temp);
    };
    const handleAddTaskbutt =() =>{
        setTodos([...todos, ""]);
        setNumTodo(numTodo+1);
    };

    useEffect(() => {
        // console.log (`You clicked ${count} times`);
        console.log(todos);
    },[numTodo]);

    return(
      <React.Fragment>
          <CssBaseline />

          <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>

                      <Grid  item xs={6}>
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
                                  <div><TextField className={classes.cardContent} label="Title" /></div>
                                  <div><TextField className={classes.cardContent} label="A small note" />
                                  </div>
                              </CardContent>
                              <CardContent>
                                  <h3>What to do?
                                      <IconButton aria-label="settings" onClick={handleAddTaskbutt}>
                                          <AddBoxIcon />
                                      </IconButton>
                                  </h3>
                                  <List>
                                      {todos.map((todo, index)=> {
                                          return (
                                              <ListItem key={index}>
                                                  <TextField className={classes.cardContent} label={`To do #${index+1}`} onChange={handleTodos(index)}/>
                                              </ListItem>
                                          );
                                      })}


                                  </List>

                              </CardContent>

                              <CardActions >
                                  <Grid container direction="row" justify = "flex-end" alignItems = "center" className={classes.datePicker}>
                                      <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                          <KeyboardDatePicker
                                              margin="normal"
                                              id="date-picker-dialog"
                                              label="Complete by date: "
                                              format="MM/dd/yyyy"
                                              value={selectedDate}
                                              onChange={handleDateChange}
                                              KeyboardButtonProps={{
                                                  'aria-label': 'change date',
                                              }}
                                          />
                                      </MuiPickersUtilsProvider>
                                      <Fab aria-label={'Add'} className={classes.fab} color={"primary"}>
                                          <AddIcon />
                                      </Fab>
                                  </Grid>
                              </CardActions>

                          </Card>
                      </Grid>

              </Grid>
          </Container>

      </React.Fragment>
    );
}
