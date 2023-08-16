import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as CS from "../community/style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";
import NoticeList from "../../components/common/noticeList/NoticeList";
import axios from "../../api/axios";

function Notice() {
  const [noticeContent, setNoticeContent] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchNoticeContent();
  }, []);

  const fetchNoticeContent = async () => {
    try {
      const response = await axios.get(`/notifications?page=${currentPage}`);

      const ContentData = response.data.results;
      setCount(response.data.count);

      setNoticeContent(ContentData);
    } catch (e) {
      console.log(e);
    }
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
      <CS.CommunityContentWrapper>
        <NoticeList
          data={noticeContent}
          url={"/notice/"}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          count={count}
        />
      </CS.CommunityContentWrapper>
    </S.NoticeWrapper>
  );
}

export default Notice;
