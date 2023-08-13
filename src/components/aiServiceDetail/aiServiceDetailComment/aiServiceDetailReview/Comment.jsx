import React, { useState } from "react";
import * as S from "./style";

// 컴포넌트
import Modal from "react-modal"; // 모달창
import EditDelete from "../../../common/editDelete/EditDelete";

const Comment = ({
  key,
  content,
  onUpdate,
  onDelete,
  isRegist,
  userInfo,
  writer,
  created_at
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(content);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창
  const [password, setPassword] = useState(""); // 비회원 댓글 삭제 비밀번호
  const [error, setError] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
    setEditedComment(content);
  };

  const handleSave = () => {
    onUpdate(editedComment);
    setIsEditing(false);
  };

  const handleDeleteButton = () => {
    setIsModalOpen(true);
    //onDelete(content);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(password);
    setPassword("");
    handleDelete();
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    onSubmit(editedComment);
    setEditedComment("");
  };

  const handleDelete = async () => {
    try {
      setError(""); // 에러 초기화

      // 댓글 삭제 요청 보내기
      const response = await axios.delete(
        `/api/v1/moin/detail/comments/${comment_id}/delete_tmp`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          },
          data: { password }
        }
      );

      // 요청이 성공한 경우
      if (response.status === 204) {
        onDelete();
        setIsModalOpen(false);
        alert("삭제되었습니다.");
      }
    } catch (err) {
      // 요청이 실패한 경우
      if (err.response && err.response.status === 400) {
        setError("올바르지 않은 비밀번호입니다.");
        alert("올바르지 않은 비밀번호입니다.");
      } else {
        setError("댓글 삭제에 실패했습니다.");
        alert("댓글 삭제에 실패했습니다.");
      }
    }
  };

  const formattedDate = new Date(created_at).toLocaleString(); // 날짜 형식 맞춤

  if (userInfo && isRegist) {
    return (
      <>
        {isEditing ? (
          <>
            <S.AiServiceDetailReviewCommentFormWriteMy>
              <S.AiServiceDetailReviewCommentFormWriteTextArea
                value={editedComment}
                onChange={e => setEditedComment(e.target.value)}
                minLength={10}
                maxLength={300}
              />

              <S.AiServiceDetailReviewCommentFormWriteButton
                onClick={handleSave}
              >
                등록
              </S.AiServiceDetailReviewCommentFormWriteButton>
            </S.AiServiceDetailReviewCommentFormWriteMy>
          </>
        ) : (
          <>
            <S.AiServiceDetailReviewMyLi>
              <S.AiServiceDetailReviewMyWrap>
                <S.AiServiceDetailReviewMyHeader>
                  <S.AiServiceDetailReviewMyWriter>
                    {writer}
                  </S.AiServiceDetailReviewMyWriter>
                  <S.AiServiceDetailReviewMyDate>
                    {formattedDate}
                  </S.AiServiceDetailReviewMyDate>
                </S.AiServiceDetailReviewMyHeader>
                <S.AiServiceDetailReviewMyContent>
                  {content}
                </S.AiServiceDetailReviewMyContent>
              </S.AiServiceDetailReviewMyWrap>
              <S.AiServiceDetailReviewMyButton>
                <EditDelete
                  isWriter={true}
                  id={key}
                  handleEdit={handleEdit}
                  handleDelete={handleDeleteButton}
                  isBlue={true}
                />
                {/* <S.AiServiceDetailReviewMyButtonEdit onClick={handleEdit}>
                  수정
                </S.AiServiceDetailReviewMyButtonEdit>
                <S.AiServiceDetailReviewMyButtonDelete
                  onClick={handleDeleteButton}
                >
                  삭제
                </S.AiServiceDetailReviewMyButtonDelete> */}
              </S.AiServiceDetailReviewMyButton>

              {/* 삭제 모달 */}
              <S.NotUserDeleteModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="댓글 삭제 확인"
                ariaHideApp={false}
              >
                <S.NotUserDeleteModalContentWrap>
                  <S.DeleteModalContentTitle>
                    정말로 삭제하시겠습니까?
                  </S.DeleteModalContentTitle>
                  <S.DeleteModalContentButtonWrap>
                    <S.NotUserDeleteModalContentButtonConfirm type="submit">
                      확인
                    </S.NotUserDeleteModalContentButtonConfirm>
                    <S.NotUserDeleteModalContentButtonCancle
                      onClick={() => setIsModalOpen(false)}
                    >
                      취소
                    </S.NotUserDeleteModalContentButtonCancle>
                  </S.DeleteModalContentButtonWrap>
                </S.NotUserDeleteModalContentWrap>
              </S.NotUserDeleteModal>
            </S.AiServiceDetailReviewMyLi>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {isEditing ? (
        <>
          <S.AiServiceDetailReviewCommentFormWrite>
            <S.AiServiceDetailReviewCommentFormWriteTextArea
              value={content}
              onChange={e => setEditedComment(e.target.value)}
              minLength={10}
              maxLength={300}
            />
            <S.AiServiceDetailReviewCommentFormWriteButton onClick={handleSave}>
              등록
            </S.AiServiceDetailReviewCommentFormWriteButton>
          </S.AiServiceDetailReviewCommentFormWrite>
        </>
      ) : (
        <>
          <S.AiServiceDetailReviewListLi>
            <S.AiServiceDetailReviewMyWrap>
              <S.AiServiceDetailReviewListHeader>
                <S.AiServiceDetailReviewListHeaderWrapper>
                  <S.AiServiceDetailReviewListWriter>
                    {writer}
                  </S.AiServiceDetailReviewListWriter>
                  <S.AiServiceDetailReviewListDate>
                    {formattedDate}
                  </S.AiServiceDetailReviewListDate>
                </S.AiServiceDetailReviewListHeaderWrapper>
                <EditDelete isWriter={true} id={3} />
              </S.AiServiceDetailReviewListHeader>
              <S.AiServiceDetailReviewListContent>
                {content}
              </S.AiServiceDetailReviewListContent>
            </S.AiServiceDetailReviewMyWrap>
            {!userInfo && (
              <S.AiServiceDetailReviewMyButtonNotUser>
                <S.AiServiceDetailReviewMyButtonDeleteNotUser
                  onClick={handleDeleteButton}
                >
                  삭제
                </S.AiServiceDetailReviewMyButtonDeleteNotUser>
              </S.AiServiceDetailReviewMyButtonNotUser>
            )}

            {/* 삭제 모달 */}
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
                  onSubmit={handleSubmit}
                >
                  <S.AiServiceDetailReviewCommentFormWritePwd
                    type="password"
                    inputMode="numeric"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
      )}
    </>
  );
};
export default Comment;
