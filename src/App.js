import React, {Component} from 'react';
import SearchPanel from './components/searchPanel'
import {Route} from 'react-router';

import {BrowserRouter as Router} from 'react-router-dom'

//import './App.css'; // would ideally have styles imported, no time.

// all components should have docblock comments, no time.

class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Route
                        path="/:query?"
                        render={({match}) => <SearchPanel match={match} ></SearchPanel>}
                    />
                </Router>
            </div>
        );
    }
}

export default App;
