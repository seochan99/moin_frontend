import { styled } from "styled-components";

export const DetailPageType = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary1};
`;

export const RightArrowBlueIcon = styled.img`
  display: flex;
  width: 1rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const DetailPageTypeText = styled.h1`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
`;

export const DetailPageAiText = styled.div`
  padding: 0 1rem;
  height: 3.5rem;
  display: flex;
  font-size: 2rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-right: 1rem;
  border: none;
  background: #4285f4;
  color: #fff;
`;
