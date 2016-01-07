class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all.order(created_at: :desc)
  end

  def create
    @tweet = current_user.tweets.create(tweet_params)
    render 'tweet'
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end

end
