class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.newTweet = this.newTweet.bind(this);
    this.state = { tweets: [] };
  }
  componentDidMount(){
    $.ajax({
      url: '/tweets',
      type: 'GET',
    }).success( data => {
      this.setState({ tweets: data.tweets });
    });
  }
  newTweet(){
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: { body: this.refs.newTweet.value }}
    }).success( data => {
      let tweets = this.state.tweets;
      tweets.unshift(data.tweet);
      this.refs.newTweet.value = null;
      this.setState({ tweets: tweets });
    }).error( data => {
      console.log('error');
    });
  }
  render(){
    let tweets = this.state.tweets.map( tweet => {
      let key = `tweet-${tweet.id}`;
      return(<Tweet key={key} {...tweet} />);
    });
    return( <div className='container'>
              <input placeholder="What's on your mind?" ref='newTweet' autoFocus={true} />
              <button className='btn' onClick={this.newTweet}>Post</button>
              <hr />
              <h1 className='center-text'>Tweets</h1>
              <hr />
              {tweets}
            </div>);
  }
}