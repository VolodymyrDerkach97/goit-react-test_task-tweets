import styled from "styled-components";

export const ActicleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 380px;
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

export const StyledCircle = styled.div`
  position: absolute;
  top: -43px;
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: 8px solid #ebd8ff;
    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
  }
`;

export const CountTweetsStyled = styled.p`
  margin-top: 62px;
  margin-bottom: 16px;
`;

export const CountFollowingStyled = styled.p`
  margin-top: 0;
  margin-bottom: 26px;
`;
