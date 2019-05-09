import React, { Component, Fragment } from 'react';
import Navbar from './partial/Navbar';

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

    const styles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    };

    return (
      <Fragment>
        <Navbar />
        <div style={styles}>
          {isPending ? <p>Loading...</p> : this.renderItems()}
        </div>
      </Fragment>
    );
  }
}

export default Home;
