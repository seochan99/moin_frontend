import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.jsx";
import AboutSection1_Banner from "./AboutSection1/AboutSection1_Banner.png";
import AboutSection1_Smartphone1 from "./AboutSection1/AboutSection1_Smartphone1.png";
import AboutSection1_Smartphone2 from "./AboutSection1/AboutSection1_Smartphone2.png";
import AboutSection1_Ellipse from "./AboutSection1/AboutSection1_Ellipse.png";
import AboutSection1_3d1 from "./AboutSection1/AboutSection1_3d1.png";
import AboutSection1_3d2 from "./AboutSection1/AboutSection1_3d2.png";
import AboutSection1_3d3 from "./AboutSection1/AboutSection1_3d3.png";
import AboutSection1_3d4 from "./AboutSection1/AboutSection1_3d4.png";

import AboutSection2_Person from "./AboutSection2/AboutSection2_Person.png";
import AboutSection2_Earth from "./AboutSection2/AboutSection2_Earth.png";
import AboutSection2_Hand from "./AboutSection2/AboutSection2_Hand.png";
import AboutSection2_Des1 from "./AboutSection2/AboutSection2_Des1.png";
import AboutSection2_Des2 from "./AboutSection2/AboutSection2_Des2.png";

import AboutSection3_TeamMoin from "./AboutSection3/AboutSection3_TeamMoin.png";
import AboutSection3_WhyMoin from "./AboutSection3/AboutSection3_WhyMoin.png";

import AboutSection4_ServiceDetail from "./AboutSection4/AboutSection4_ServiceDetail.png";

import AboutSection5_Title from "./AboutSection5/AboutSection5_Title.png";
import AboutSection5_GotoMain from "./AboutSection5/AboutSection5_GotoMain.png";

import AboutSection6_MoinStory from "./AboutSection6/AboutSection6_MoinStory.png";
import AboutSection6_AboutUs from "./AboutSection6/AboutSection6_AboutUs.png";
import AboutSection6_DGU from "./AboutSection6/AboutSection6_DGU.png";
import AboutSection6_Making from "./AboutSection6/AboutSection6_Making.png";
import AboutUs1 from "./AboutSection6/aboutUs1.jpeg";
import AboutUs2 from "./AboutSection6/aboutUs2.jpg";
import AboutUs3 from "./AboutSection6/aboutUs3.jpeg";
import "./animation.css";

function About() {
  const navigate = useNavigate();

  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 60, behavior: "smooth" });
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onScroll() {
    setPosition(window.scrollY);
  }

  const [currentSection, setCurrentSection] = useState("none");
  useEffect(() => {
    getCurrentSection();
  }, [currentSection, position]);

  const Ref_AboutSection1 = useRef();
  const Ref_AboutSection2 = useRef();
  const Ref_AboutSection3_1 = useRef();
  const Ref_AboutSection3_2 = useRef();
  const Ref_AboutSection4 = useRef();
  const Ref_AboutSection5 = useRef();
  const Ref_AboutSection6 = useRef();
  const Ref_AboutSection7 = useRef();

  const getCurrentSection = () => {
    if (position < Ref_AboutSection1.current.offsetTop + 100) {
      setCurrentSection("AboutSection1");
    } else if (
      position >= Ref_AboutSection1.current.offsetTop + 100 &&
      position < Ref_AboutSection2.current.offsetTop + 100
    ) {
      setCurrentSection("AboutSection2");
    } else if (
      position >= Ref_AboutSection2.current.offsetTop + 100 &&
      position < Ref_AboutSection3_1.current.offsetTop + 100
    ) {
      setCurrentSection("AboutSection3_1");
    } else if (
      position >= Ref_AboutSection3_1.current.offsetTop + 100 &&
      position < Ref_AboutSection3_2.current.offsetTop + 100
    ) {
      setCurrentSection("AboutSection3_2");
    } else if (
      position >= Ref_AboutSection4.current.offsetTop + 700 &&
      position < Ref_AboutSection5.current.offsetTop + 100
    ) {
      setCurrentSection("AboutSection5");
    } else if (position >= Ref_AboutSection5.current.offsetTop + 100) {
      setCurrentSection("AboutSection6");
    }
  };

  return (
    <S.AboutWrapper>
      {/* 스마트폰 있는 첫 화면 */}
      <S.AboutSection1 ref={Ref_AboutSection1}>
        <S.AboutSpace />
        <S.AboutSection_Body
          className={currentSection == "AboutSection1" ? "AboutSection1" : ""}
        >
          {/* 제목 */}
          <S.AboutSection1_Title src={AboutSection1_Banner} />
          {/* 스마트폰1 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Smartphone"
                : ""
            }
            src={AboutSection1_Smartphone1}
            style={{ width: "60%", top: "57%", left: "55%", zIndex: "3" }}
          />
          {/* 스마트폰2 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Smartphone"
                : ""
            }
            src={AboutSection1_Smartphone2}
            style={{
              animationDuration: "1.7s",
              width: "55%",
              top: "67%",
              left: "43%",
              zIndex: "2"
            }}
          />
          {/* 텍스트 */}
          <S.AboutSection_Img
            src={AboutSection1_Ellipse}
            style={{
              width: "50%",
              top: "55%",
              left: "50%"
            }}
          />
          {/* 글씨 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Floating"
                : "abcd"
            }
            src={AboutSection1_3d1}
            style={{
              animationDuration: "2.6s",
              width: "17%",
              top: "45%",
              left: "20%"

              // transform: "rotate(-10.219deg)"
            }}
          />
          {/* 책 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Floating"
                : "abcd"
            }
            src={AboutSection1_3d4}
            style={{
              animationDuration: "2.4s",
              width: "15%",
              top: "72%",
              left: "12%"
            }}
          />

          {/* 그림 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Floating"
                : "abcd"
            }
            src={AboutSection1_3d3}
            style={{
              animationDuration: "2.5s",
              width: "18%",
              top: "46%",
              left: "80%"

              // transform: "rotate(13.687deg)"
            }}
          />
          {/* 전구 */}
          <S.AboutSection_Img
            className={
              currentSection == "AboutSection1"
                ? "AboutSection1_Floating"
                : "abcd"
            }
            src={AboutSection1_3d2}
            style={{
              animationDuration: "4s",
              width: "13%",
              top: "72%",
              left: "85%"
            }}
          />
        </S.AboutSection_Body>
      </S.AboutSection1>

      <S.AboutSpace style={{ backgroundColor: "black" }} />

      {/* 모인의 개요 */}
      <S.AboutSection2 ref={Ref_AboutSection2}>
        <S.AboutSection2_Coloring />
        <S.AboutSection2_Coloring />

        <S.AboutSection_Body>
          <S.AboutSection_Img
            className={currentSection == "AboutSection2" ? "AboutSection2" : ""}
            src={AboutSection2_Person}
            style={{ width: "60%", top: "50%", left: "50%", zIndex: 0 }}
          />

          {/* 급속도로 발전하는 인공지능, 급변하는 사회 */}
          <S.AboutSection_Box
            className={
              currentSection == "AboutSection2" ? "AboutSection2_Popup1" : ""
            }
            style={{ animationDelay: "0.2s" }}
          >
            <S.AboutSection_Img
              src={AboutSection2_Earth}
              style={{ width: "20%", top: "23%", left: "16%" }}
            />
            <S.AboutSection_Img
              className="AboutSection1_Smartphone"
              src={AboutSection2_Des1}
              style={{ width: "35%", top: "28%", left: "33%" }}
            />
          </S.AboutSection_Box>

          {/* 그속에서 인공지능 서비스 활용능력이 디지털 격차를 가속화하고 있지 않나요? */}
          <S.AboutSection_Box
            className={
              currentSection == "AboutSection2" ? "AboutSection2_Popup2" : ""
            }
            style={{ animationDelay: "0.2s" }}
          >
            <S.AboutSection_Img
              src={AboutSection2_Hand}
              style={{ width: "14%", top: "70%", left: "65%" }}
            />
            <S.AboutSection_Img
              src={AboutSection2_Des2}
              style={{ width: "28%", top: "74%", left: "82%" }}
            />
          </S.AboutSection_Box>
        </S.AboutSection_Body>
      </S.AboutSection2>

      <S.AboutSpace style={{ backgroundColor: "black" }} />

      {/* 모인의 필요성 */}
      <S.AboutSection3 ref={Ref_AboutSection3_1}>
        <S.AboutSection_Img
          className={
            currentSection == "AboutSection3_1" ? "AboutSection3_Fadein" : ""
          }
          src={AboutSection3_TeamMoin}
          style={{
            animationDelay: "0.5s",

            width: "100%",
            top: "50%",
            left: "50%"
          }}
        />
      </S.AboutSection3>

      <S.AboutSection3 ref={Ref_AboutSection3_2}>
        <S.AboutSection_Img
          className={
            currentSection == "AboutSection3_2" ? "AboutSection3_Fadein" : ""
          }
          src={AboutSection3_WhyMoin}
          style={{ width: "40%", top: "50%", left: "50%", minWidth: "300px" }}
        />
      </S.AboutSection3>

      <S.AboutSection4 ref={Ref_AboutSection4}>
        <S.AboutSection_Img_r
          src={AboutSection4_ServiceDetail}
          style={{
            width: "90%"
          }}
        />
      </S.AboutSection4>

      <S.AboutSection5 ref={Ref_AboutSection5}>
        <S.AboutSection_Img_r
          src={AboutSection5_Title}
          style={{
            width: "60%",
            paddingBottom: "5rem"
          }}
        />

        {/* 메인페이지로 이동하기 */}
        <S.AboutSection_Img_r
          className={
            currentSection == "AboutSection5" ||
            currentSection == "AboutSection6"
              ? "AboutSection3_Fadein"
              : ""
          }
          src={AboutSection5_GotoMain}
          style={{
            opacity: "0",
            animationDelay: "0.5s",
            width: "20%",
            minWidth: "150px"
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </S.AboutSection5>

      <S.AboutSection6
        ref={Ref_AboutSection6}
        className={currentSection == "AboutSection6" ? "" : "display_none"}
      >
        {/* 모인스토리 */}
        <S.AboutSection_Img_r
          className={
            currentSection == "AboutSection6" ? "AboutSection2_Popup1" : ""
          }
          src={AboutSection6_MoinStory}
          style={{
            width: "40%",
            marginBottom: "30rem",
            minWidth: "300px"
          }}
        />

        {/* 어바웃 어스 */}
        <S.AboutSection_Img_r
          src={AboutSection6_AboutUs}
          style={{
            width: "70%",
            marginBottom: "2rem"
          }}
        />

        <S.AboutSection_Img_r
          src={AboutUs2}
          style={{
            width: "70%",
            borderRadius: "3rem",
            marginBottom: "5rem"
          }}
        />
        {/* 어바웃 어스 */}
        <S.AboutSection_Img_r
          className={
            currentSection == "AboutSection5" ? "AboutSection3_Fadein" : ""
          }
          src={AboutSection6_DGU}
          style={{
            width: "60%"
          }}
        />
      </S.AboutSection6>

      <S.AboutSection7 ref={Ref_AboutSection7}>
        <S.AboutSection_Img
          className={
            currentSection == "AboutSection5" ? "AboutSection3_Fadein" : ""
          }
          src={AboutSection6_Making}
          style={{
            width: "70%",
            top: "5%",
            left: "50%"
          }}
        />
        <S.AboutSection_Body>
          <S.AboutSection_Iframe
            style={{
              width: "70%",
              height: "70%",
              top: "50%",
              left: "50%"
            }}
            src="https://www.youtube.com/embed/DQWsN3lIfEY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </S.AboutSection_Body>
      </S.AboutSection7>
    </S.AboutWrapper>
  );
}

export default About;
