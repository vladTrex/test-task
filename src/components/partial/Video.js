import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Video extends Component {
    render() {
        const { source, title, views } = this.props;

        return (
            <Grid item xs={12}>
                <Paper style={{justifyContent: 'center'}}>
                    <video controls="controls" src={source}>
                        Sorry, your browser doesn't support embedded videos
                    </video>
                </Paper>
            </Grid>
        );
    }
}

export default Video;