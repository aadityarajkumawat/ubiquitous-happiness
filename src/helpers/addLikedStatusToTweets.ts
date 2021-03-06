import { Like, Tweet } from "../entities/Tweets";
import { TweetWithLikedStatus } from "../interfaces";

export const addLikedStatusToTweets = async (
    tweets: Array<Tweet>,
    user_id: number
) => {
    const tweetsWithLikedStatus: Array<TweetWithLikedStatus> = [];

    for (let i = 0; i < tweets.length; i++) {
        let currID = tweets[i].tweet_id;
        let tweetWithLikedStatus = { ...tweets[i], liked: false };

        const numberOfLikes = await Like.count({
            where: { user_id, like_on_id: currID },
        });

        if (numberOfLikes === 1) {
            tweetWithLikedStatus.liked = true;
        }
        tweetsWithLikedStatus.push(tweetWithLikedStatus);
    }

    return tweetsWithLikedStatus;
};
