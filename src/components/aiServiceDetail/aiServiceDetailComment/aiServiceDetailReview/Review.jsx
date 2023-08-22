import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import * as S from "./style";

import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../../api/axios";

function Review() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 댓글 목록
  const [comments, setComments] = useState({});

  // 내 댓글
  const [myComments, setMyComments] = useState({});

  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/moin/detail/${aiName}/comments?page=${currentPage}`
      );

      const detailData = response.data;
      setComments(detailData);
    } catch (e) {}
  };

  // 내 댓글
  const fetchDataMy = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken

      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`/moin/detail/${aiName}/mycomments`, {
        headers
      });
      const detailData = response.data;
      setMyComments(detailData);
    } catch (e) {}
  };

  const [showForm, setShowForm] = useState(true); // 댓글 작성 폼 보이기 여부 (댓글 삭제 시 다시 댓글 보이게)

  const handleSubmitComment = async (commentText, password) => {
    // moin/detail/{aiName}/comments
    let newComment = "";
    if (userInfo) {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      newComment = {
        content: commentText
      };
      try {
        const response = await axios.post(
          `moin/detail/${aiName}/comments`,
          newComment,
          {
            headers
          }
        );

        if (response.status === 200) {
          // alert("댓글이 등록되었습니다.");
          fetchData();
          fetchDataMy();
        }
      } catch (e) {
        alert("댓글 등록에 실패하였습니다.");
      }
    } else {
      newComment = {
        content: commentText,
        password: password
      };
      try {
        const response = await axios.post(
          `moin/detail/${aiName}/comments`,
          newComment
        );

        if (response.status === 200) {
          // alert("댓글이 등록되었습니다.");
          fetchData();
          if (userInfo) {
            fetchDataMy();
          }
        }
      } catch (e) {
        alert("댓글 등록에 실패하였습니다.");
      }
    }
    setShowForm(false); // 댓글 등록 후 댓글 작성 폼 감추기
  };

  // 초반 셋팅
  useEffect(() => {
    fetchData();
    if (userInfo) {
      fetchDataMy();
    }
  }, []);

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <S.ReviewWrapper>
      <CommentForm onSubmit={handleSubmitComment} userInfo={userInfo} />
      <CommentList
        comments={comments}
        fetchDataMy={fetchDataMy}
        fetchData={fetchData}
        userInfo={userInfo}
        myComments={myComments}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </S.ReviewWrapper>
  );
}

export default Review;
