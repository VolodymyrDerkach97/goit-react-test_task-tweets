import TweetsItem from "components/TweetsItem/TweetsItem";

import { useSelector } from "react-redux";
import { selectVisibleTweets } from "redux/selectors";

const TweetsList = () => {
  const tweets = useSelector(selectVisibleTweets);
  return (
    <>
      <div>TweetsList</div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          listStyle: "none",
        }}
      >
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <TweetsItem {...tweet} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TweetsList;
