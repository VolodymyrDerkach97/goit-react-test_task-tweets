import { useState } from "react";
import { ActicleStyled } from "./Tweets.style";
import { useDispatch, useSelector } from "react-redux";
import { addFollowing, deleteFollowing } from "redux/usersSlice";
import { selectIsFollowing } from "redux/selectors";
import { changeCountFollowers, incrementFollowers } from "redux/operations";
const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const [followersCount, setFollowersCount] = useState(followers);

  const isFoll = useSelector(selectIsFollowing);

  const isFollowing = isFoll.includes(id);

  const dispatch = useDispatch();
  const handleFollowing = () => {
    if (isFollowing) {
      dispatch(deleteFollowing(id));
      setFollowersCount(followersCount - 1);

      console.log("відняв");
    } else {
      dispatch(addFollowing(id));
      setFollowersCount(followersCount + 1);

      console.log("добавив");
    }
  };
  return (
    <ActicleStyled
      style={{ outline: "1px solid red", width: "380px", height: "460px" }}
    >
      <img src="" alt="" />
      <img src="" alt="" />
      <img src={avatar} alt={user} width="100" height="120" />
      <p>followersCount: {followersCount}</p>
      <p>{tweets} TWEETS</p>
      <p>{followersCount} FOLLOWERS</p>
      <button onClick={handleFollowing}>
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </button>
    </ActicleStyled>
  );
};
export default TweetsItem;
