import { styled } from "styled-components";

export const KeywordWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 0.5rem 0;
  :first-child {
    margin-left: 0rem;
    margin-right: 0.25rem;
  }
  :last-child {
    margin-left: 0.25rem;
    margin-right: 0rem;
  }
`;

export const KeywordTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  background-color: black;
  color: white;
`;
