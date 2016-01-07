class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.newTweet = this.newTweet.bind(this);
    this.state = { tweets: [] };
  }
  newTweet(){
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: { body: this.refs.newTweet.value }}
    }).success( data => {
      let tweets = this.state.tweets;
      tweets.push(data.tweet);
      this.setState({ tweets: tweets });
    }).error( data => {
      console.log('error')
    });
  }
  render(){
    return( <div>
              <input placeholder="What's on your mind?" ref='newTweet' autoFocus={true} />
              <button className='btn' onClick={this.newTweet}>Post</button>
            </div>);
  }
}