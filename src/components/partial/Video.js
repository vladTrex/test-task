import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Video extends Component {
    render() {
        const { source, title, views } = this.props;
        const videoViews = `${views} views`;

        if (!source) return <Grid item xs={12}>Sorry. Data is missing</Grid>;

        return (
            <Grid item xs={12}>
                <Paper>
                    <div>{title} {videoViews}</div>
                    <video controls="controls" src={source}>
                        Sorry, your browser doesn't support embedded videos
                    </video>
                </Paper>
            </Grid>
        );
    }
}

Video.propTypes = {
    source: PropTypes.object.isRequired,
    title: PropTypes.string,
    views: PropTypes.number,
};

export default Video;