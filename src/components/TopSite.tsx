import * as React from 'react';

interface TopSiteProps {
    site: chrome.topSites.MostVisitedURL;
}

export class TopSite extends React.Component<TopSiteProps> {
    render() {
        const { site } = this.props;
        const url = new URL(site.url);
        return (<div className={'topSite'}>
            <a href={site.url}>
                <div className="image">
                    <img src={`http://www.google.com/s2/favicons?domain=${url.hostname}`} alt={site.title[0]} />
                </div>
                <div className="title">
                    <span>{site.title}</span>
                </div>
            </a>
        </div>)
    }
}
