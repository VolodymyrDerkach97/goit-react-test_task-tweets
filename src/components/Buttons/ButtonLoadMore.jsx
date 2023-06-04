import PropTypes from "prop-types";
import { ButtonLoadMoreStyled } from "./ButtonLoadMore.styled";

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <ButtonLoadMoreStyled onClick={onLoadMore}>LOAD MORE</ButtonLoadMoreStyled>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
