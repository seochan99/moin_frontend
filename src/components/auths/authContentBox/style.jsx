import { styled } from "styled-components";
import colors from "../../../style/theme";

export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 20rem;
  size: 1.5rem;
  border-radius: 11px;
  background: var(--grey-2, #f8f8fa);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    height: 16rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 10rem;
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
  }
`;

export const ProfileInfoContentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.black};
`;

export const ProfileInfoContentIcon = styled.img`
  height: 3.7rem;
  margin-bottom: 3rem;
`;
