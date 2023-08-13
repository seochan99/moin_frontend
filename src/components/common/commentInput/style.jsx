import { styled } from "styled-components";

export const DetailCommentInputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DetailCommentInput = styled.input`
  width: 90%;
  height: 5rem;
  border: 1px solid #eeeff3;
  border-radius: 20px;
  padding: 0rem 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #282828;
  outline: none;
  &::placeholder {
    color: #acacac;
  }
`;

export const DetailCommentButton = styled.button`
  width: 10%;
  height: 5rem;
  margin-left: 2rem;
  border: 1px solid #aeafb9;
  border-radius: 20px;

  color: #acacac;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  // hover
  &:hover {
    background-color: #eeeff3;
  }
`;
