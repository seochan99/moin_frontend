import { styled } from "styled-components";

export const MainCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 30px;
  margin: 0.5rem 0rem;
  margin-right: 1rem;
  /* border-radius: 20px;
  border: 5px solid;
  border-color: ${props => props.theme.colors.primary2}; */

  @media (max-width: 700px) {
    width: 90%;
  }
  @media (min-width: 700px) {
    width: 700px;
  }
`;

export const MainCategoryTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  width: 6rem;
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
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
`;

export const MainCategoryTagWrapper = styled.div`
  font-size: 1.5rem;
  height: 100%;
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
  flex-shrink: 0;

  border-radius: 0.7rem;
  border: 0.5px solid;

  border-color: ${props =>
    props.$isActive ? props.theme.colors.primary2 : props.theme.colors.gray3};

  background-color: ${props =>
    props.$isActive ? props.theme.colors.primary2 : props.theme.colors.bg};

  color: ${props =>
    props.$isActive ? props.theme.colors.bg : props.theme.colors.primary2};

  &:hover {
    background-color: ${props =>
      props.$isActive ? props.theme.colors.primary2 : props.theme.colors.gray2};
  }
  display: flex;
  justify-content: start;
  align-items: center;
`;
