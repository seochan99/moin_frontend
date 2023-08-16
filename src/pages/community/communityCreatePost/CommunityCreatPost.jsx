import React, { useEffect, useState } from "react";
import { FileDrop } from "react-file-drop";
import MDEditor from "@uiw/react-md-editor";

import axios from "../../../api/axios";
import * as S from "./style";
import "./mdEditorStyle.css";

import * as AIS from "../../ai/style";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function CommunityCreatPost() {
  const navigate = useNavigate();
  // ai
  const [aiOption, setAiOption] = useState([]);
  const [currentAiOption, setCurrentAiOption] = useState("");
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);
  const [category, setCategory] = useState("common"); // 카테고리
  const getCurrentAiOption = option => {
    setCurrentAiOption(option);
  };
  const [user, setUser] = useRecoilState(userState);

  // ai option state
  const fetchAiContent = async () => {
    try {
      const response = await axios.get("moin/all/ai");
      const aiData = response.data;
      setAiOption(aiData);
    } catch (e) {
      console.log(e);
    }
  };

  const selectMenuHandler = index => {
    setCurrentTab(index);
    setCategory(index === 0 ? "common" : index === 1 ? "tip" : "qna");
    // index = 0 : 자유 게시판
    // index = 1 : 이용꿀팁
    // index = 2 : Q&A

    // index별 다른 게시판 내용
    if (index === 0) {
      // common
      setValue("**자유 게시판 내용을 입력해주세요.**");
    } else if (index === 1) {
      // tip
      setValue("**이용꿀팁 내용을 입력해주세요.**");
    } else if (index === 2) {
      // qna
      setValue("**Q&A 내용을 입력해주세요.**");
    }
  };
  const [title, setTitle] = useState(""); // 제목
  const [value, setValue] = useState("**자유 게시판 내용을 입력해주세요.**");

  const [boardColor, setBoardColor] = useState(false);

  // ai목록 불러오기
  useEffect(() => {
    fetchAiContent();
  }, []);

  const handleClickWirte = async () => {
    if (category === "tip") {
      if (currentAiOption === "▿ 서비스 선택") {
        alert("이용꿀팁 게시판은 서비스를 선택하셔야합니다.");
        return;
      }
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (currentAiOption === "▿ 서비스 선택") {
      setCurrentAiOption("");
    }

    try {
      const accessToken = user.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      console.log(currentAiOption);
      const data = {
        ai: currentAiOption ?? null,
        category: category,
        title: title,
        content: value
      };
      console.log(headers);
      console.log(data);
      const response = await axios.post("communities/posts", data, {
        headers
      });
      console.log(response);
      if (response.status === 201) {
        alert("게시글이 작성되었습니다.");
        navigate("/community");
      }
    } catch (e) {
      alert("게시글 작성에 실패하였습니다.");
    }
  };
  return (
    <>
      <AIS.AiServiceDetailCommentWrap>
        <S.CommuntiyCreateHeader> 글 작성</S.CommuntiyCreateHeader>

        <AIS.AiServiceDetailCommentCategory>
          <AIS.AiServiceDetailCommentCategoryTabMenu>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 0}
              onClick={() => selectMenuHandler(0)}
            >
              자유 게시판
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 1}
              onClick={() => selectMenuHandler(1)}
            >
              이용꿀팁
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 2}
              onClick={() => selectMenuHandler(2)}
            >
              Q&A
            </AIS.AiServiceDetailCommentCategoryMenuItem>
          </AIS.AiServiceDetailCommentCategoryTabMenu>
        </AIS.AiServiceDetailCommentCategory>
        {/* // current tab 1,2일때 인공지능 선택 */}
        {currentTab === 1 || currentTab === 2 ? (
          <S.SelcetorWrapper>
            <S.Select
              required
              name="ais"
              onChange={e => getCurrentAiOption(e.target.value)}
            >
              <S.Option value={null}>▿ 서비스 선택</S.Option>
              {aiOption.map((ai, index) => (
                <S.Option key={index} value={ai.title}>
                  {ai.title}
                </S.Option>
              ))}
            </S.Select>
            <S.SelcetorDescriptionText>
              *이용꿀팁 게시글은 서비스 선택이 필수적입니다.(Q&A는 선택사항)
            </S.SelcetorDescriptionText>
          </S.SelcetorWrapper>
        ) : (
          <></>
        )}

        <S.CommunityCreateTitle
          placeholder="제목을 입력해주세요."
          maxLength="100"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <FileDrop
          onDragOver={event => {
            setBoardColor(true);
          }}
          onDragLeave={event => {
            setBoardColor(false);
          }}
          onDrop={(files, event) => {
            const formdata = new FormData();
            formdata.append("image", files[0]);
            formdata.append("id", 0); // Replace with the appropriate community id
            const headers = { "Content-Type": files[0].type };
            if (files[0].size >= 3000000) {
              alert("3MB 이상 파일은 업로드가 불가능합니다.");
            } else if (
              files[0].type === "image/png" ||
              files[0].type === "image/jpeg" ||
              files[0].type === "image/jpg"
            ) {
              axios
                .post("communities/upload-image", formdata, { headers })
                .then(function (response) {
                  const image_url = response.data.image_url;
                  let imageName = image_url.substring(
                    image_url.lastIndexOf("/") + 1
                  );
                  let newValue =
                    value + `\n\n![${files[0].name}](${image_url})`;
                  setValue(newValue);
                })
                .catch(function (error) {
                  console.error("Error uploading image:", error);
                });
            } else {
              alert("png, jpg, jpeg 파일이 아닙니다.");
            }
            setBoardColor(false);
          }}
        >
          <MDEditor
            height={"400px"}
            value={value}
            onChange={setValue}
            preview="edit"
            data-color-mode="light"
          />
        </FileDrop>

        {/* // 작성완료버튼 */}
        <S.ButtonWrapper>
          <S.CommunityCreateButton onClick={handleClickWirte}>
            작성완료
          </S.CommunityCreateButton>
        </S.ButtonWrapper>
      </AIS.AiServiceDetailCommentWrap>
    </>
  );
}

export default CommunityCreatPost;
