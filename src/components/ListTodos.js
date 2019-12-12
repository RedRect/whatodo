import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Todos from "./Todos";


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
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const ListTodos = props => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [loadedLists, setLoadedList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        fetch(`https://us-central1-whatodo-dcacc.cloudfunctions.net/api/lists`)
            .then(res => {
                if(!res.ok)
                {
                    throw new Error('Could not fetch lists.');
                }

                return res.json();
            })
            .then(result =>{
                const tempLists =[];
                result.data.map((list) =>
                    tempLists.push(list)
                )
                setLoadedList(tempLists);
                // console.log(tempLists[0].data);
                setIsLoading(false);
            })
            .catch(err =>{
               console.log(err);
               setIsLoading(false);
            });

    };

    let content = <p>Loading ...</p>;

    if (!isLoading && loadedLists)
    {
        content =(
            <React.Fragment>
                <CssBaseline />

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {loadedLists.map(list => (
                            <Grid item key={list.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={list.data.title}
                                        subheader={list.data.subtitle}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Todos list={list.data}/>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">September 14, 2016</Button>


                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>


            </React.Fragment>
        );
    }else if (!isLoading && !loadedLists)
    {
        content = <p>Failed to fetch lists</p>
    }

    return content;
}

export default ListTodos;