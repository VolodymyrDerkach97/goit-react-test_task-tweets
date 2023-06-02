import TweetsItem from "components/TweetsItem/TweetsItem";
import { useSelector } from "react-redux";
import { selectUsers } from "redux/selectors";

const TweetsList = () => {
  const tweets = useSelector(selectUsers);
  const tweetsLocalStorage = localStorage.getItem("isFollowing");

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
