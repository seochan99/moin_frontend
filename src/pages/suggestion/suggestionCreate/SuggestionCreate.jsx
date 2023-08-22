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
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";

function SuggestionCreate() {
  const navigate = useNavigate();
  // ai
  const [aiOption, setAiOption] = useState([]);
  const [currentAiOption, setCurrentAiOption] = useState("");

  const [url, setUrl] = useState("");
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
    } catch (e) {}
  };

  const [title, setTitle] = useState(""); // 제목
  const [value, setValue] = useState("**건의사항 내용을 입력해주세요.**");

  const [boardColor, setBoardColor] = useState(false);

  // ai목록 불러오기
  useEffect(() => {
    fetchAiContent();
  }, []);

  const handleClickWirte = async () => {
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

      const data = {
        ai: currentAiOption,
        title: title,
        content: value,
        url: url
      };

      const response = await axios.post("suggestions", data, {
        headers
      });

      if (response.status === 201) {
        alert("건의사항이 작성 되었습니다.");
        navigate("/suggestion");
      }
    } catch (e) {
      alert("건의사항 작성에 실패하였습니다.");
    }
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
    formdata.append("app", "suggestion");

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
  return (
    <>
      <AIS.AiServiceDetailCommentWrap>
        <CommuntiyDetailPageType type={`suggestion`} aiName={null} />

        <S.SelcetorWrapper>
          <S.SlectorTextWrapper>
            <S.Select
              required
              name="ais"
              onChange={e => getCurrentAiOption(e.target.value)}
            >
              <S.Option value={null}>▿ 서비스 선택</S.Option>▿
              {aiOption.map((ai, index) => (
                <S.Option key={index} value={ai.title}>
                  {ai.title}
                </S.Option>
              ))}
            </S.Select>
            <S.SelcetorDescriptionText>*선택</S.SelcetorDescriptionText>
          </S.SlectorTextWrapper>
          <div>
            <S.SelcetorDescriptionText style={{ color: "#ACACAC" }}>
              ❗️건의사항은 수정 및 삭제가 불가합니다. 신중한 작성 부탁드립니다.
            </S.SelcetorDescriptionText>
          </div>
        </S.SelcetorWrapper>
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
        <S.CommunityCreateTitle
          placeholder="수정 및 추가를 원하는 페이지에 해당하는 링크를 첨부해주세요."
          maxLength="100"
          onChange={e => {
            setUrl(e.target.value);
          }}
          value={url}
        />
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

export default SuggestionCreate;
