import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import CommonList from "../../common/commonList/CommonList";

function CommunityCommon() {
  const [commonContent, setCommonContent] = useState([]);

  useEffect(() => {
    const commonData = [
      {
        id: 1,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 2,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 3,
        title: "챗지피티에 대해 보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 4,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 5,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 6,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 7,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 8,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 9,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 10,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 11,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 12,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 13,
        title: "챗지피티에 해자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      }

      // 추가.....
    ];
    setCommonContent(commonData);
  }, []);
  return (
    <>
      <CommonList
        data={commonContent}
        url={"/community/commons/"}
        writeUrl={"/community/create"}
      />
    </>
  );
}

export default CommunityCommon;
