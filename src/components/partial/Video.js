import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = {
  videoContainer: {
    border: '1px solid #ccc',
    width: '40%',
    margin: '10px 0'
  },
  infoBar: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  textBlock: {
    width: '50%',
    padding: '10px',
  },
  viewsBlock: {
    width: '50%',
    textAlign: 'right',
    padding: '10px',
  },
};

class Video extends Component {
  render() {
    const { source, title, views } = this.props;
    const videoViews = `${views} views`;

    if (!source) return <Grid item xs={12}>Data is missing</Grid>;

    return (
      <div style={styles.videoContainer}>
        <div style={styles.infoBar}>
          <div style={styles.textBlock}>{title}</div>
          <div style={styles.viewsBlock}>{videoViews}</div>
        </div>
        <video width="100%" controls="controls">
          <source src={source}/>
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  source: PropTypes.object.isRequired,
  title: PropTypes.string,
  views: PropTypes.number
};

export default Video;