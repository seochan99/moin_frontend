import { styled } from "styled-components";

export const AiServiceDetailCommentCategory2 = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
`;

export const CommuntiyCreateHeader = styled.div`
  color: #4285f4;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  border: 1px solid #4285f4;
  padding: 1rem;
  border-radius: 16px;
`;
export const CommunityCreateTitle = styled.input`
  margin-top: 2rem;
  width: 100%;
  height: 4rem;

  border: 1px solid #d9d9df;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;
export const SlectorTextWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const CommunityCreateButton = styled.button`
  width: 10rem;
  height: 4rem;
  border: none;
  border-radius: 8px;
  background-color: #4285f4;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
`;
export const SelcetorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  margin-top: 2rem;
  // last child felx-end
`;

export const SelcetorDescriptionText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Select = styled.select`
  /* 스타일링을 원하는대로 설정하세요 */
  background-color: #4285f4;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;

  appearance: none;
  text-align: center;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: white;
  color: #333333;
`;
