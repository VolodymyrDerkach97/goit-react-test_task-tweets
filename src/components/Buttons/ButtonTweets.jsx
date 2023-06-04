import PropTypes from "prop-types";
import { ButtonStyled } from "./ButtonTweets.styled";

export const ButtonFollow = ({ isFollowing, onClick }) => {
  return (
    <ButtonStyled isFollowing={isFollowing} onClick={onClick}>
      {isFollowing ? "FOLLOWING" : "FOLLOW"}
    </ButtonStyled>
  );
};

ButtonFollow.propTypes = {
  isFollowing: PropTypes.bool,
  onClick: PropTypes.func,
};
