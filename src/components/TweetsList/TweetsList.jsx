import TweetsItem from "components/TweetsItem/TweetsItem";

import { useSelector } from "react-redux";
import { selectVisibleTweets } from "redux/selectors";
import { ListStyled } from "./TweetsList.styled";

const TweetsList = () => {
  const tweets = useSelector(selectVisibleTweets);
  return (
    <>
      <ListStyled>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <TweetsItem {...tweet} />
          </li>
        ))}
      </ListStyled>
    </>
  );
};

export default TweetsList;
