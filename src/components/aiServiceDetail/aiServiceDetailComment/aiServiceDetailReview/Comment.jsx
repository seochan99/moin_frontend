import React, { useState } from "react";
import * as S from "./style";

// 컴포넌트

import EditDelete from "../../../common/editDelete/EditDelete";
import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../../api/axios";
import Modal from "../../../common/modal/Modal";

const Comment = ({
  id,
  content,
  isRegist,
  userInfo,
  writer,
  isTemp,
  created_at
}) => {
  const [user, setUser] = useRecoilState(userState); // 유저 정보
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(content);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창
  const [password, setPassword] = useState(""); // 비회원 댓글 삭제 비밀번호
  const [error, setError] = useState("");

  if (!writer) {
    return <></>;
  }

  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedComment(content);
  };

  const UserUpdateSubmit = async () => {
    // 유저 수정 Patch 보내기 ㅣ
    // `moin/detail/comments/${id}`
    const accessToken = userInfo.accessToken; // 추출한 accessToken
    const headers = {
      Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    };
    try {
      const response = await axios.patch(
        `moin/detail/comments/${id}`,
        {
          content: editedComment
        },
        {
          headers
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert("댓글이 수정되었습니다.");

        // 새로고침
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      alert("댓글 수정에 실패했습니다.");
    }

    // 수정 성공시
    setIsEditing(false);
  };

  // 삭제 버튼 누르면 모달 창 열기
  const UserDeleteSubmit = () => {
    setIsModalOpen(true);
  };

  // 유저 삭제
  const userCommentOnclick = async () => {
    const accessToken = userInfo.accessToken; // 추출한 accessToken
    const headers = {
      Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    };

    try {
      const response = await axios.delete(`moin/detail/comments/${id}`, {
        headers
      });

      console.log("회원 댓글 삭제: ");
      console.log(response);
      if (response.status === 204) {
        alert("댓글이 삭제되었습니다.");
        setIsModalOpen(false);
        // 새로고침
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  // 비유저 삭제
  const nonUserDeleteSubmit = async e => {
    e.preventDefault();
    const nonUserPassword = {
      password: password
    };

    try {
      const response = await axios.post(
        `moin/detail/comments/${id}/delete_tmp`,
        nonUserPassword
      );

      if (response.status === 204 || response.status === 200) {
        alert("댓글이 삭제가 됐습니다.");
        setPassword("");
        // 새로고침
        window.location.reload();
      }
    } catch (error) {
      setPassword("");
      alert("비밀번호가 틀렸습니다.");
    }
  };

  if (userInfo && isRegist) {
    return (
      <>
        {isEditing ? (
          <>
            {/* ------------ 로그인 유저 수정 폼 ------------ */}
            <S.AiServiceDetailReviewCommentFormWriteMy>
              <S.AiServiceDetailReviewCommentFormWriteTextArea
                value={editedComment}
                onChange={e => setEditedComment(e.target.value)}
                minLength={10}
                maxLength={300}
              />

              <S.AiServiceDetailReviewCommentFormWriteButton
                onClick={UserUpdateSubmit}
              >
                등록
              </S.AiServiceDetailReviewCommentFormWriteButton>
            </S.AiServiceDetailReviewCommentFormWriteMy>
          </>
        ) : (
          <>
            {/* ------------ 로그인 유저 댓글 ------------ */}
            <S.AiServiceDetailReviewMyLi>
              <S.AiServiceDetailReviewMyWrap>
                <S.AiServiceDetailReviewMyHeader>
                  <S.AiServiceDetailReviewMyWriter>
                    {writer}
                  </S.AiServiceDetailReviewMyWriter>
                  <S.AiServiceDetailReviewMyDate>
                    {created_at}
                  </S.AiServiceDetailReviewMyDate>
                </S.AiServiceDetailReviewMyHeader>
                <S.AiServiceDetailReviewMyContent>
                  {content}
                </S.AiServiceDetailReviewMyContent>
              </S.AiServiceDetailReviewMyWrap>
              <S.AiServiceDetailReviewMyButton>
                <EditDelete
                  isWriter={true}
                  id={id}
                  isUser={false}
                  handleEdit={handleEdit}
                  handleDelete={UserDeleteSubmit}
                  isBlue={true}
                />
                {/* <S.AiServiceDetailReviewMyButtonEdit onClick={handleEdit}>
                  수정
                </S.AiServiceDetailReviewMyButtonEdit>
                <S.AiServiceDetailReviewMyButtonDelete
                  onClick={UserDeleteSubmit}
                >
                  삭제
                </S.AiServiceDetailReviewMyButtonDelete> */}
              </S.AiServiceDetailReviewMyButton>

              {/* ------------ 유저 삭제 모달 ------------ */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={userCommentOnclick}
                content={"정말로 삭제하시겠습니까?"}
              />
            </S.AiServiceDetailReviewMyLi>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {/* ------------ 전체 댓글 리스트 ------------ */}
      <S.AiServiceDetailReviewListLi>
        <S.AiServiceDetailReviewMyWrap>
          <S.AiServiceDetailReviewListHeader>
            <S.AiServiceDetailReviewListHeaderWrapper>
              <S.AiServiceDetailReviewListWriter>
                {writer}
              </S.AiServiceDetailReviewListWriter>
              <S.AiServiceDetailReviewListDate>
                {created_at}
              </S.AiServiceDetailReviewListDate>
            </S.AiServiceDetailReviewListHeaderWrapper>
            {/* 비유저 삭제 쓰레기통 */}
            <EditDelete
              isWriter={true}
              isUser={!isTemp}
              id={id}
              handleDelete={UserDeleteSubmit}
            />
          </S.AiServiceDetailReviewListHeader>
          <S.AiServiceDetailReviewListContent>
            {content}
          </S.AiServiceDetailReviewListContent>
        </S.AiServiceDetailReviewMyWrap>
        {!userInfo && (
          <S.AiServiceDetailReviewMyButtonNotUser></S.AiServiceDetailReviewMyButtonNotUser>
        )}

        {/* ------------ 비유저 삭제  모달창 ------------ */}
        <S.NotUserDeleteModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="댓글 삭제 확인"
          ariaHideApp={false}
        >
          <S.NotUserDeleteModalContentWrap>
            <S.NotUserDeleteModalContentTitle>
              비밀번호를 입력하세요
            </S.NotUserDeleteModalContentTitle>

            <S.AiServiceDetailReviewCommentFormWrite
              onSubmit={nonUserDeleteSubmit}
            >
              <S.AiServiceDetailReviewCommentFormWritePwd
                type="password"
                inputMode="numeric"
                value={password}
                onChange={handlePasswordChange}
                pattern="\d{4}"
                minLength={4}
                maxLength={4}
                title="4자리 숫자로 입력해주세요"
                placeholder="비밀번호 (4자리 숫자)"
                required
              />

              <S.NotUserDeleteModalContentButtonWrap>
                <S.NotUserDeleteModalContentButtonConfirm type="submit">
                  확인
                </S.NotUserDeleteModalContentButtonConfirm>
                <S.NotUserDeleteModalContentButtonCancle
                  onClick={() => setIsModalOpen(false)}
                >
                  취소
                </S.NotUserDeleteModalContentButtonCancle>
              </S.NotUserDeleteModalContentButtonWrap>
            </S.AiServiceDetailReviewCommentFormWrite>
          </S.NotUserDeleteModalContentWrap>
        </S.NotUserDeleteModal>
      </S.AiServiceDetailReviewListLi>
    </>
  );
};
export default Comment;
