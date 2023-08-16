import React from "react";

import * as S from "./style";
import { CiLocationOn, CiMail, CiInstagram } from "react-icons/ci";

import MainLogo from "../../../assets/images/moin_logo.png";
import { Link } from "react-router-dom";

function FooterBar() {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterTitle>Get in Touch</S.FooterTitle>
        <S.FooterBody>
          <S.FooterInfo>
            <CiLocationOn />
            <S.FooterText>8819 Ohio St. South Gate, CA 90280</S.FooterText>
          </S.FooterInfo>

          <S.FooterInfo>
            <CiMail />
            <S.FooterText>서울특별시 중구 필동로1길 30</S.FooterText>
          </S.FooterInfo>

          <S.FooterInfo>
            <CiInstagram />
            <S.FooterText>
              <Link to={`https://www.instagram.com/moin.dgu/`} target="_blank">
                @moin.dgu
              </Link>
            </S.FooterText>
          </S.FooterInfo>
        </S.FooterBody>
        <S.NavLogo>
          <S.NavLogoIcon src={MainLogo} alt="MO:IN" />
          <S.NavLogoTitle to={`/`}> MO:IN</S.NavLogoTitle>
        </S.NavLogo>
      </S.FooterContent>
      <S.FooterCopyRight>
        {"@"}Copyright 2023. MOIN all rights reserved.
      </S.FooterCopyRight>
    </S.FooterWrapper>
  );
}
export default FooterBar;
