import { styled } from "styled-components";

export const MainCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 30px;
  margin: 0.5rem 0;

  /* border-radius: 20px;
  border: 5px solid;
  border-color: ${props => props.theme.colors.primary2}; */

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 700px) {
    width: 700px;
  }
`;

export const MainCategoryTitle = styled.div`
  font-size: 1.5rem;
  width: 60px;
  flex-shrink: 0;
  color: ${props => props.theme.colors.primary1};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCategoryTagListWrapper = styled.div`
  flex-grow: 1;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  overflow: scroll;
`;

export const MainCategoryTagWrapper = styled.div`
  font-size: 1.5rem;
  height: 100%;
  padding: 0 1.5rem;
  margin: 0 0.5rem;
  flex-shrink: 0;

  border-radius: 9px;
  border: 0.5px solid;
  border-color: ${props => props.theme.colors.gray4};

  color: ${props => props.theme.colors.primary2};
  display: flex;
  justify-content: start;
  align-items: center;
`;
