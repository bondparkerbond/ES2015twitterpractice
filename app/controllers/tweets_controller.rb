class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all.order(created_at: :desc)
  end

  def create
    @tweet = current_user.tweets.create(tweet_params)
    render 'tweet'
  end

  def search
    search_term = params[:search_term]
    if search_term.split('').first == '@'
      user = User.where('lower(handle) LIKE ?', "%#{search_term.downcase.split('@').last}%")
      @tweets = user.first.tweets.order(created_at: :desc) if user.any?
      # @tweets = Tweet.where('lower(body) LIKE ?', "%#{search_term.downcase}%")
    else
      @tweets = Tweet.where('lower(body) LIKE ?', "%#{search_term.downcase}%")
    end
    render 'index'
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end

end
