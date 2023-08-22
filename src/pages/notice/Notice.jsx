import React, { useEffect, useState } from "react";
import * as S from "./style";

import Banner from "../../components/common/banner/Banner";

import axios from "../../api/axios";
import PostList from "../../components/common/postList/PostList";
import NoticeBanner from "../../components/common/noticeBanner/NoticeBanner";
import Loading from "../../components/common/loading/Loading";

function Notice() {
  const [noticeContent, setNoticeContent] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    fetchNoticeContent();
  }, []);

  const fetchNoticeContent = async () => {
    try {
      const response = await axios.get(`/notifications?page=${currentPage}`);

      const ContentData = response.data.results;
      setCount(response.data.count);

      setNoticeContent(ContentData);
      setInit(true);
    } catch (e) {}
  };
  //페이지변경
  useEffect(() => {
    fetchNoticeContent();
  }, [currentPage]);

  return (
    <S.NoticeWrapper>
      <Banner
        titleKorean="공지사항"
        titleEnglish="NOTICE"
        image={<S.NoticeIconImg />}
      />
      <NoticeBanner
        title={"공지안내"}
        content={"MOIN의 새로운 소식과 공지사항을 확인해보세요!"}
      />

      {init ? (
        <>
          <PostList
            use={"notice"}
            data={noticeContent}
            url={"/notice/"}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            count={count}
          />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </S.NoticeWrapper>
  );
}

export default Notice;
