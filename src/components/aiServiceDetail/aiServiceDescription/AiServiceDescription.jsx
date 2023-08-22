import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";

// 아이콘
import DescriptionHeartIcon from "../../../assets/images/icon/descriptionHeartIcon.png";
import DescriptionBulbIcon from "../../../assets/images/icon/descriptionBulbIcon.png";
import DescriptionFunctionIcon from "../../../assets/images/icon/descriptionFunctionIcon.png";

import axios from "../../../api/axios";

export function AiServiceDescription() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/moin/detail/${aiName}/info`);
      const detailData = response.data[0];

      setData(detailData);
    } catch (e) {}
  };

  return (
    <>
      <S.AiServiceDescriptionWrap>
        {/* 서비스 소개 */}
        <S.AiServiceDescriptionIntroTitle>
          <S.AiServiceDescriptionIntroIcon
            src={DescriptionHeartIcon}
            alt="서비스 소개 아이콘"
          />
          서비스 소개
        </S.AiServiceDescriptionIntroTitle>

        <S.AiServiceDescriptionIntroContent>
          {data.introduce}
        </S.AiServiceDescriptionIntroContent>

        {/* 상세기능 */}
        <S.AiServiceDescriptionFunctionTitle>
          <S.AiServiceDescriptionBulbIcon
            src={DescriptionBulbIcon}
            alt="상세 기능 아이콘"
          />
          상세 기능
        </S.AiServiceDescriptionFunctionTitle>

        {data.header_1 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header_1}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content_1.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}

        {data.header_2 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header_2}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content_2.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}

        {data.header_3 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header_3}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content_3.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}
      </S.AiServiceDescriptionWrap>
    </>
  );
}
