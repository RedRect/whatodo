import React, {Component} from 'react';
import ListTodos from "./components/ListTodos";

import './App.css';
import TopBar from "./components/TopBar";
import FormTodo from "./components/FormTodo";

class App extends Component {
    render() {
        return (
            <React.Fragment>

                <TopBar/>
                <FormTodo/>
                <ListTodos />
            </React.Fragment>
        )

    }
}

export default App;
