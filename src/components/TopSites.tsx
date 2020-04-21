import * as React from 'react';
import { TopSite } from './TopSite';

interface TopSitesProps {
    sites: chrome.topSites.MostVisitedURL[];
}

export class TopSites extends React.Component<TopSitesProps> {
    render() {
        return (<div className={'topSites'}>
            {this.props.sites.map((site) => {
                return <TopSite site={site} />
            })}
        </div>);
    }
}
