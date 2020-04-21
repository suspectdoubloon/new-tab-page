import * as React from 'react';

export class Search extends React.Component {
    render() {
        return (
            <form id="search" action="https://google.com.au/search" method="get">
                <input placeholder="Search the web" type="text" name="q" autoComplete="off"></input>
                <button>→</button>
            </form>
        );
    }
}