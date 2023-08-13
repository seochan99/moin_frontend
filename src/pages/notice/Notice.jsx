import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as CS from "../community/style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";
import NoticeList from "../../components/common/noticeList/NoticeList";

function Notice() {
  const [noticeContent, setNoticeContent] = useState([]);

  useEffect(() => {
    const noticeData = [
      {
        id: 1,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 2,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 3,
        title: "챗지피티에 대해 보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 4,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 5,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 6,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 7,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 8,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 9,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 10,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 11,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 12,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      },
      {
        id: 13,
        title: "챗지피티에 해자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        view_cnt: 5
      }

      // 추가.....
    ];
    setNoticeContent(noticeData);
  }, []);

  return (
    <S.NoticeWrapper>
      <Banner
        titleKorean="공지사항"
        titleEnglish="NOTICE"
        image={<S.NoticeIconImg />}
      />
      <CS.CommunityContentWrapper>
        <NoticeList data={noticeContent} url={"/notice/"} />
      </CS.CommunityContentWrapper>
    </S.NoticeWrapper>
  );
}

export default Notice;
