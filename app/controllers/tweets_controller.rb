class TweetsController < ApplicationController
  def create
    @tweet = current_user.tweets.create(tweet_params)
    render 'tweet'
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end

end
