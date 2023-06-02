import { useEffect, useState } from "react";
import { ActicleStyled } from "./Tweets.style";
import { useDispatch } from "react-redux";
import { addFollowing, togleFollowingAction } from "redux/usersSlice";
import { togleFollowing } from "redux/operations";

const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const [isFollowing, setFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowingUsers, setIsFollowingUsers] = useState([]);

  const dispatch = useDispatch();
  const hadnldeFollowing = () => {
    dispatch(addFollowing(id));
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
      <button onClick={hadnldeFollowing}>
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </button>
    </ActicleStyled>
  );
};

export default TweetsItem;
// toggleCompleted(state, action) {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//         break;
//       }
//     }
// export function addToFavorites(event) {
//     const btn = event.target.closest('.news-card__favorite-button');
//     const newsId = btn.dataset.newsId;
//     const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
//     const favoriteIndex = favoriteList.findIndex(
//       favorite => favorite.title === newsId
//     );
//     const bool = favoriteIndex === -1;
//     if (bool) {
//       const currentNews = currentNewsPage.find(news => news.title === newsId);
//       favoriteList.push(currentNews);
//     } else {
//       favoriteList.splice(favoriteIndex, 1);
//     }
//     localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
//     btn.textContent = bool ? 'Remove from favorite' : 'Add to favorite';
//     createIcon(bool, btn);
//   }
