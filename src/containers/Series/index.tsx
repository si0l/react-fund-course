import React from 'react';
import Axios from 'axios';
import { SeriesProps, SeriesState } from '../../types/types';
import { Link } from 'react-router-dom';

class Series extends React.Component<SeriesProps, SeriesState> {

    constructor(props: SeriesProps) {
        super(props);
        this.state = {
            series: [],
        }
    }

    async componentDidMount(): Promise<void> {
        const seriesResponse: any = await Axios.get('http://api.tvmaze.com/search/shows?q=Vikings');
        this.setState({ series: seriesResponse.data });
    }

    render() {
        return <div className='Series'>
            {this.state.series.map(s => <p key={s.show.id}><Link to = {`/series/${s.show.id}`}>{s.show.name}</Link></p>)}
        </div>
    }

}

export default Series;