import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Video extends Component {
    render() {
        const { source, title, views } = this.props;
        const videoViews = `${views} views`;

        if (!source) return <Grid item xs={12}>Data is missing</Grid>;

        return (
          <div style={{border: '1px solid #ccc', width: '40%', margin: '10px 0'}}>
            <div style={{marginBottom: '20px'}}>{title} {videoViews}</div>
            <video width="100%" controls="controls">
              <source src={source} />
            </video>
          </div>
        );
    }
}

Video.propTypes = {
    source: PropTypes.object.isRequired,
    title: PropTypes.string,
    views: PropTypes.number,
};

export default Video;