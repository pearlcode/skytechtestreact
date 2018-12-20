import React from 'react';

export default (props) => {

    const {results} = props;
    return (
        <ul>
            {results.map((item, index) => {
                return (<li key={index}>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                    <span>{item.url}</span>
                </li>)
            })}
        </ul>
    );

}

