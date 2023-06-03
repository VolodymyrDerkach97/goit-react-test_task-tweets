import { useDispatch, useSelector } from "react-redux";
import { addFollowing, deleteFollowing } from "redux/usersSlice";
import { selectIsFollowing } from "redux/selectors";
import { changeCountFollowers } from "redux/operations";

import {
  ActicleStyled,
  ImgWrapperStyled,
  StyledCircle,
  TweetsDataWrapperStyled,
} from "./TweetsItem.styled";
import defImg from "images/picture.png";

const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const dispatch = useDispatch();

  const isFollowingArray = useSelector(selectIsFollowing);
  const isFollowing = isFollowingArray.includes(id);

  const handleFollowing = () => {
    if (isFollowing) {
      dispatch(deleteFollowing(id));
      dispatch(changeCountFollowers({ id, followers: followers - 1 }));
    } else {
      dispatch(addFollowing(id));
      dispatch(changeCountFollowers({ id, followers: followers + 1 }));
    }
  };
  const formattedNumber = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <ActicleStyled>
      <ImgWrapperStyled>
        <img src="" alt="" />
        <img src={defImg} alt="" width={308} height={168} />
      </ImgWrapperStyled>
      <TweetsDataWrapperStyled>
        <StyledCircle>
          <img src={avatar} alt={user} width="80" height="80" />
        </StyledCircle>

        <p>{tweets} TWEETS</p>
        <p>{formattedNumber} FOLLOWERS</p>
        <button onClick={handleFollowing}>
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </button>
      </TweetsDataWrapperStyled>
    </ActicleStyled>
  );
};
export default TweetsItem;
