import { ButtonStyled } from "./ButtonTweets.styled";

const ButtonFollow = ({ isFollowing, onClick }) => {
  return (
    <ButtonStyled isFollowing={isFollowing} onClick={onClick}>
      {isFollowing ? "FOLLOWING" : "FOLLOW"}
    </ButtonStyled>
  );
};
export default ButtonFollow;
