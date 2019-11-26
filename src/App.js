import React, {Component} from 'react';
import ListTodos from "./components/listTodos";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <ListTodos />
                <p>Well a para</p>
            </div>
        )

    }
}

export default App;
