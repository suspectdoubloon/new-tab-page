import * as React from "react";
import { TopSites } from './TopSites';
import { Search } from './Search';

interface NewtabProps {}

interface NewtabState {
    topSites: chrome.topSites.MostVisitedURL[],
}

export class Newtab extends React.Component<NewtabProps, NewtabState> {

    constructor(props: any) {
        super(props);
        this.state = {
            topSites: [],
        };
    }

    componentDidMount() {
        chrome.topSites.get((sites) => {
            this.setState({
                topSites: sites,
            })
        });
    }

    render() {
        return <div className={'newtab'}>
            <Search />
            <TopSites sites={this.state.topSites} />
        </div>
    }
}