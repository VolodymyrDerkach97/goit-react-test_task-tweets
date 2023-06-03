import { ButtonLoadMoreStyled } from "./ButtonLoadMore.styled";

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <ButtonLoadMoreStyled onClick={onLoadMore}>Load more</ButtonLoadMoreStyled>
  );
};

export default ButtonLoadMore;
