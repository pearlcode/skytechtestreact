import React, {Component} from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props)

        this.state = {query: props.query};
        this.handleChange = this.handleChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }
    onKeyPress = (e) => {
        const {fetchData} = this.props;
        if(e.key === 'Enter'){
        const {query} = this.state;
            fetchData(query);
        }

    }

    render() {

        const {fetchData} = this.props;
        const {query} = this.state;
        return (<div>
            <input type="text" name="query" placeholder="type your query here" onKeyPress={this.onKeyPress} onChange={this.handleChange}
                   value={query} ></input>
            <button onClick={() => {
                fetchData(query)
            }}>Search
            </button>
        </div>);
    }
}

export default SearchInput;