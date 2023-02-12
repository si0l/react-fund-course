import Axios from 'axios';
import React from 'react';

type SSProps = {
    params: {
        id: number,
    }
}

class SingleSeries extends React.Component<SSProps, any> {

    state = {
        show: {
            name: 'No name'
        },
    }

    async componentDidMount(): Promise<void> {
        const seriesResponse: any = await Axios.get(`http://api.tvmaze.com/shows/${this.props.params.id}`);
        this.setState({ show: seriesResponse.data });
    }

    render() {
        return <div><p>{this.state.show.name}</p></div>
    }

}

export default SingleSeries;