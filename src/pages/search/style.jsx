import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  padding: 0 1rem;
  margin-top: 2rem;
  max-width: 1178px;
  width: 100%;
`;

export const SearchTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const SearchTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary1};
`;

export const SearchTitleGray = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.gray4};
`;
