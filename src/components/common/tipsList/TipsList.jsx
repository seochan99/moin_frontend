import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import * as S from "./style";
import BottomArrow from "../../../assets/images/icon/bottomArrow.png";
// 컴포넌트
import Selector from "../selector/Selector";
import Paging from "../paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";

const TipsList = ({ data, url, writeUrl }) => {
  const [Ais, setAis] = useState([]);

  const AisList = [
    "챗지피티",
    "aaa",
    "aaa",
    "zzz",
    "bbb",
    "cc",
    "대학생",
    "기타"
  ];
  useEffect(() => {
    // 데이터 통신해서 API넣기
    setAis(AisList);
  }, []);

  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const navigate = useNavigate();
  // 댓글 데이터를 최신순으로 정렬
  const sortedComments = data.slice().reverse();

  //Paging
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 댓글 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedComments.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  console.log(data);

  //selector
  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "rating", title: "조회순" },
    { value: "recent", title: "평점순" },
    { value: "recent", title: "좋아요순" }
  ];
  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWrite>
            <S.Select
              required
              name="ais"
              onChange={e => setAis(e.target.value)}
              value={Ais}
            >
              <S.Option value="" disabled>
                직종을 선택해주세요.
              </S.Option>
              {Ais.map((ai, index) => (
                <S.Option key={index} value={ai}>
                  {ai === "서비스 선택" ? <>서비스선택</> : ai}
                </S.Option>
              ))}
            </S.Select>
            <S.AiServiceDetailTipHeaderWriteContent
              onClick={() => {
                // 로그인하지 않은 경우 로그인 페이지로 이동
                !userInfo ? navigate("/login") : navigate(writeUrl);
              }}
            >
              <S.StyledPencilIcon />
              글쓰기
            </S.AiServiceDetailTipHeaderWriteContent>
          </S.AiServiceDetailTipHeaderWrite>
          <S.AiServiceDetailTipHeaderSort>
            <Selector
              options={SelectorOption}
              getCurrentOption={getCurrentOption}
            />
          </S.AiServiceDetailTipHeaderSort>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        <S.AiServiceDetailTipTable>
          <S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTr>
              <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                서비스명
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                등록일시
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh> </S.AiServiceDetailTipTableTh>
            </S.AiServiceDetailTipTableTr>
          </S.AiServiceDetailTipTableThead>
          <S.AiServiceDetailTipTableTbody>
            {currentItems.map(data => (
              <S.AiServiceDetailTipTableTr
                key={data.id}
                onClick={() => navigate(`${url}${data.id}`)}
              >
                <S.AiServiceDetailTipTableTd>
                  {data.id}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.title}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.name}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.date}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  <S.LikeIcon />
                  {data.like}
                  <S.CommentIcon />
                  {data.comment_cnt}
                </S.AiServiceDetailTipTableTd>
              </S.AiServiceDetailTipTableTr>
            ))}
          </S.AiServiceDetailTipTableTbody>
        </S.AiServiceDetailTipTable>
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={sortedComments.length}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
};

export default TipsList;
