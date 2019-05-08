import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const initialState = {
  resources: [],
  isPending: false,
};

class Home extends PureComponent {
  state = initialState;

  async componentWillMount(){
    const sentData= {
      method: 'GET',
      mode: 'cors',
    };
    this.setState({
      isPending: true,
    });

    try {
      const response = await fetch('/resources.json', sentData)
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
    const YOUTUBE_URL = 'https://www.youtube.com/watch?v=';

    switch(sourceType) {
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

    return (resources.map((resource, index) => <video controls="controls" key={index} src={this.composeSourceUrl(resource)}>
      Sorry, your browser doesn't support embedded videos
    </video>));
  }

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
