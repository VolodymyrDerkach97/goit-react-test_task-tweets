import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { addFollowing, deleteFollowing } from "redux/users/usersSlice";
import { selectIsFollowing } from "redux/selectors";
import { changeCountFollowers } from "redux/operations";

import {
  ActicleStyled,
  AvatarStyled,
  AvatarWrapperStyled,
  CountFollowingStyled,
  CountTweetsStyled,
  IconGoItStyled,
  ImgWrapperStyled,
  TweetsDataWrapperStyled,
} from "./TweetsItem.styled";
import { ButtonFollow } from "components/Buttons";

import defImg from "media/images/picture.png";
import iconGoIT from "media/icon/Vector.svg";

const TweetsItem = ({ id, user, avatar, tweets, followers }) => {
  const dispatch = useDispatch();

  const isFollowingArray = useSelector(selectIsFollowing);

  const isFollowing = isFollowingArray.some((user) => user.id === id);

  const handleFollowing = () => {
    if (isFollowing) {
      dispatch(deleteFollowing(id));
      dispatch(changeCountFollowers({ id, followers: followers - 1 }));
    } else {
      dispatch(addFollowing({ id, user, avatar, tweets, followers }));
      dispatch(changeCountFollowers({ id, followers: followers + 1 }));
    }
  };
  const formattedNumber = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <ActicleStyled>
      <ImgWrapperStyled>
        <IconGoItStyled
          src={iconGoIT}
          alt=""
          width={76}
          height={22}
          style={{ fill: "red" }}
        />

        <img src={defImg} alt="" width={308} height={168} />
      </ImgWrapperStyled>
      <TweetsDataWrapperStyled>
        <AvatarWrapperStyled>
          <AvatarStyled src={avatar} alt={user} />
        </AvatarWrapperStyled>

        <CountTweetsStyled>{tweets} TWEETS</CountTweetsStyled>
        <CountFollowingStyled>{formattedNumber} FOLLOWERS</CountFollowingStyled>
        <ButtonFollow isFollowing={isFollowing} onClick={handleFollowing} />
      </TweetsDataWrapperStyled>
    </ActicleStyled>
  );
};
export default TweetsItem;

TweetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string,
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
};
