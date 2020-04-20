import * as React from "react";

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
        return <div>
            <form action="https://google.com.au/search" method="get">
                <input type="text" name="q"></input>
            </form>
            {this.state.topSites.map((site) => {
                return <div>
                    <a href={site.url}><span>{site.title}</span></a>
                </div>
            })}
        </div>
    }
}