import styled from "styled-components";

export const SelectWrapperStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 50px;
  margin-left: auto;
`;

export const SelectStyled = styled.select`
  appearance: none;
  background-color: #471ca9;
  color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  @media screen and (min-width: 390px) {
    font-size: 20px;
  }
`;

export const OptionStyled = styled.option`
  background-color: #8a5de9;
  color: #ffffff;
  font-size: 16px;
  @media screen and (min-width: 390px) {
    font-size: 20px;
  }
`;
