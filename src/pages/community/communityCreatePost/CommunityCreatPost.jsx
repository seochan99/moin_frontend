import React, { useEffect, useState } from "react";
import { FileDrop } from "react-file-drop";
import MDEditor from "@uiw/react-md-editor";

import axios from "../../../api/axios";
import * as S from "./style";
import "./mdEditorStyle.css";

import * as AIS from "../../ai/style";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import CommuntiyDetailPageType from "../communtiyDetailPageType/CommuntiyDetailPageType";

function CommunityCreatPost() {
  const navigate = useNavigate();
  const [aiOption, setAiOption] = useState([]);
  const { state } = useLocation();
  const [currentAiOption, setCurrentAiOption] = useState(state.ai);
  const [currentTab, setCurrentTab] = useState(0);
  const [category, setCategory] = useState(state.category);
  const [user, setUser] = useRecoilState(userState);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("내용을 입력해주세요.");
  const [boardColor, setBoardColor] = useState(false);
  const [header, setHeader] = useState("");
  useEffect(() => {
    setCurrentTab(
      state.category === "undefined"
        ? 0
        : state.category === "common"
        ? 0
        : state.category === "tip"
        ? 1
        : 2
    );

    setCategory(state.category);
    fetchAiContent();
  }, []);

  const fetchAiContent = async () => {
    try {
      const response = await axios.get("moin/all/ai");
      setAiOption(response.data);
    } catch (e) {}
  };

  const selectMenuHandler = index => {
    setCurrentTab(index);
    setCategory(index === 0 ? "common" : index === 1 ? "tip" : "qna");
    const defaultText =
      index === 0
        ? "자유 게시판 내용을 입력해주세요."
        : index === 1
        ? "이용꿀팁 내용을 입력해주세요."
        : "Q&A 내용을 입력해주세요.";
    setValue(`**${defaultText}**`);
  };

  const handleImageUpload = async files => {
    const image = files[0];
    if (image.size >= 3000000) {
      alert("3MB 이상 파일은 업로드가 불가능합니다.");
      return;
    }
    const allowedFormats = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedFormats.includes(image.type)) {
      alert("png, jpg, jpeg 파일이 아닙니다.");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("app", "community");

    try {
      const response = await fetch("http://101.101.209.178/upload-image", {
        method: "POST",
        body: formdata
      });

      const responseData = await response.json(); // Parse JSON response

      if (response.ok) {
        const image_url = responseData.image_url; // Assuming the JSON response has an 'image_url' property
        const newValue = value + `\n\n![${image.name}](${image_url})`;
        setValue(newValue);
      } else {
        console.error("Image upload failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const getCurrentAiOption = option => {
    setCurrentAiOption(option);
  };

  const handleClickWrite = async () => {
    if (
      category === "tip" &&
      (currentAiOption === "▿ 서비스 선택" || currentAiOption === "")
    ) {
      alert("이용꿀팁 게시판은 서비스를 선택하셔야 합니다.");
      return;
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (currentAiOption === "▿ 서비스 선택") {
      setCurrentAiOption("");
    }

    try {
      const accessToken = user.accessToken;
      const headers = { Authorization: `Bearer ${accessToken}` };
      const data = {
        ai: currentAiOption || null,
        category: category,
        title: title,
        content: value
      };

      const response = await axios.post("communities/posts", data, { headers });
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
        {/* <CommuntiyDetailPageType type={`${category}s`} aiName={null} /> */}

        <AIS.AiServiceDetailCommentCategory>
          <AIS.AiServiceDetailCommentCategoryTabMenu>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              $isActive={currentTab === 0}
              onClick={() => selectMenuHandler(0)}
            >
              자유 게시판
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              $isActive={currentTab === 1}
              onClick={() => selectMenuHandler(1)}
            >
              이용꿀팁
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              $isActive={currentTab === 2}
              onClick={() => selectMenuHandler(2)}
            >
              Q&A
            </AIS.AiServiceDetailCommentCategoryMenuItem>
          </AIS.AiServiceDetailCommentCategoryTabMenu>
        </AIS.AiServiceDetailCommentCategory>
        <S.CreatePost>
          {/* // current tab 1,2일때 인공지능 선택 */}
          {currentTab === 1 || currentTab === 2 ? (
            <S.SelcetorWrapper>
              <S.Select
                required
                name="ais"
                onChange={e => getCurrentAiOption(e.target.value)}
              >
                <S.Option value={null}>▿ 서비스 선택</S.Option>
                {
                  state.ai !== "" ? (
                    <S.Option value={state.ai} selected>
                      {state.ai}
                    </S.Option>
                  ) : (
                    <></>
                  ) // 수정할 때 기존 ai가 있으면 기존 ai를 선택한 상태로 둔다.
                }
                {aiOption.map((ai, index) =>
                  state.ai === ai.title ? (
                    <></>
                  ) : (
                    <>
                      <S.Option key={index} value={ai.title}>
                        {ai.title}
                      </S.Option>
                    </>
                  )
                )}
              </S.Select>
              <S.SelcetorDescriptionText>
                {currentTab === 1 ? (
                  // 이용꿀팁 게시글은 서비스 선택이 필수적입니다.(Q&A는 선택사항)
                  <strong style={{ color: "#FF5D47", fontSize: "1.5rem" }}>
                    *필수
                  </strong>
                ) : (
                  <>*선택</>
                )}
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
            onDragOver={() => setBoardColor(true)}
            onDragLeave={() => setBoardColor(false)}
            onDrop={files => handleImageUpload(files)}
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
            <S.CommunityCreateButton onClick={handleClickWrite}>
              작성완료
            </S.CommunityCreateButton>
          </S.ButtonWrapper>
        </S.CreatePost>
      </AIS.AiServiceDetailCommentWrap>
    </>
  );
}

export default CommunityCreatPost;
