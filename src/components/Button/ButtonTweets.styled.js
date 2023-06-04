import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 196px;
  padding: 14px 39px;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  color: #373737;
  background-color: ${({ isFollowing, theme }) => {
    if (isFollowing) {
      return theme.colors.following;
    } else {
      return theme.colors.follow;
    }
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  border-radius: 10.3108px;
  cursor: pointer;

  &:active {
    background-color: #c5f99e;
  }
`;
