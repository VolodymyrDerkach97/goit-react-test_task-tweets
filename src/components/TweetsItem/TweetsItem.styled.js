import styled from "styled-components";

export const ActicleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 300px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  color: #ebd8ff;

  @media screen and (min-width: 390px) {
    width: 380px;
  }
`;

export const ImgWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  padding-top: 28px;
  padding-bottom: 18px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 8px;
    width: 100%;
    background-color: #ebd8ff;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const IconGoItStyled = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const TweetsDataWrapperStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AvatarWrapperStyled = styled.div`
  position: absolute;
  top: -43px;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const AvatarStyled = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  color: white;
`;

export const CountTweetsStyled = styled.p`
  margin-top: 62px;
  margin-bottom: 16px;
`;

export const CountFollowingStyled = styled.p`
  margin-top: 0;
  margin-bottom: 26px;
`;
