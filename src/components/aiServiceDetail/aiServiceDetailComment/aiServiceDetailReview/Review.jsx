import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import axios from "axios";
import { userState } from "../../../../context/authState";

import { useRecoilState } from "recoil";

function Review() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);
  console.log("userInfo");
  console.log(userInfo);

  const [comments, setComments] = useState([
    // { id: 1, text: "첫 번째 댓글입니다.", isMember: false },
    // { id: 2, text: "두 번째 댓글입니다.", isMember: false, password: "1234" }
    {
      id: 1,
      ai: "챗GPT",
      writer: "dudtlstm",
      content: "내 과제 해결이!",
      created_at: "2023-08-03T01:43:09.639646"
    }
  ]);
  /** 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error("Error fetching comments:", error);
      });
  }, []);
*/
  const [showForm, setShowForm] = useState(true); // 댓글 작성 폼 보이기 여부 (댓글 삭제 시 다시 댓글 보이게)

  const handleUpdateComment = (id, updatedComment) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id ? { ...comment, content: updatedComment } : comment
      )
    );
  };

  const handleDeleteComment = id => {
    setComments(prevComments =>
      prevComments.filter(comment => comment.id !== id)
    );
  };

  const handleSubmitComment = (commentText, password) => {
    const newComment = {
      id: Date.now(),
      content: commentText,
      created_at: Date(),
      isMember: true,
      password: password
    };

    const currentDate = new Date(); // 현재 날짜와 시간 가져오기
    console.log("댓글 등록 날짜 및 시간:", currentDate);

    setComments(prevComments => [...prevComments, newComment]);
    setShowForm(false); // 댓글 등록 후 댓글 작성 폼 감추기
  };

  return (
    <>
      {<CommentForm onSubmit={handleSubmitComment} />}

      <CommentList
        comments={comments}
        onUpdate={handleUpdateComment}
        onDelete={commentId => {
          handleDeleteComment(commentId);
          setShowForm(true); // 댓글 삭제 후 댓글 작성 폼 보이도록 설정
        }}
      />
    </>
  );
}

export default Review;
