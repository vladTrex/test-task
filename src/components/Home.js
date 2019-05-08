import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Video from './partial/Video';

const initialState = {
  resources: [],
  isPending: false,
};

class Home extends Component {
  state = initialState;

  async componentDidMount() {
    this.setState({
      isPending: true,
    });

    try {
      const response = await fetch('/resources.json');
      const result = await response.json();
      this.setState({
        resources: result.items,
        isPending: false,
      });
    } catch (e) {
      this.setState({ isPending: false });
      throw new Error();
    }
  }

  composeSourceUrl = src => {
    const sourceType = src.source;
    const FACEBOOK_URL = 'https://www.facebook.com/';
    const YOUTUBE_URL = 'https://www.youtube.com/embed/';

    if (src.source === 'youtube' && !src.videoId) return null;

    switch (sourceType) {
      case 'facebook':
        return `${FACEBOOK_URL}${src.videoId}`;
      case 'youtube':
        return `${YOUTUBE_URL}${src.videoId}`;
      default:
        return src.url;
    }
  };

  renderItems = () => {
    const { resources } = this.state;

    return resources.map((resource, index) => (
      <Video
        key={index}
        title={resource.title}
        views={resource.views}
        source={this.composeSourceUrl(resource)}
      />
    ));
  };

  render() {
    const { isPending } = this.state;

    return (
      <Grid container spacing={24}>
        {isPending ? <p>Loading...</p> : this.renderItems()}
      </Grid>
    );
  }
}

export default Home;
