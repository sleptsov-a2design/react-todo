import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import List from './components/List';
import Home from './components/home/index';
import 'normalize.css';
const history = createBrowserHistory();




function App() {
    return (
        <Router history={ history }>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/TodoList" exact component={List} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
