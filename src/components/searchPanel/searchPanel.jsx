import React, {Component} from 'react';
import SearchInput from './../searchInput'
import SearchResults from './../searchResults'
import Pagination from './../pagination'
import dataFetch from './../../utils/dataFetch';
import {Route} from 'react-router';

import {BrowserRouter as Router} from 'react-router-dom'

//import './App.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {searchText: '',
            results: [],
            page: 1,
            query: props.match.params.query}
        this.fetchData = this.fetchData.bind(this);
    }


    fetchData(query) {

        console.log('fetch data');
        // could add history item here, not ideal
        this.asyncFetch(query);

    }

    async asyncFetch(query) {
        const results = await dataFetch(query);
        console.log(results);
        // pagination state could be used here to paginate results.
        this.setState({results: results});
    }

    render() {
        const {state: {results, query}, fetchData} = this;
        return (
            <div className="App">
                <Router>
                    <Route
                        path="/"
                        render={(props) => (
                            <header className="App-header">
                                <div>{query}</div>
                                <SearchInput fetchData={fetchData} query={query}></SearchInput>
                                <SearchResults results={results}></SearchResults>
                                <Pagination/>
                            </header>
                        )}
                    />
                </Router>
            </div>
        );
    }
}

export default SearchPanel;
