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
    } catch (e) {
      console.log(e);
    }
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

      console.log(currentAiOption);
      const data = {
        ai: currentAiOption,
        title: title,
        content: value,
        url: url
      };

      console.log(headers);
      console.log(data);
      const response = await axios.post("suggestions", data, {
        headers
      });
      console.log(response);
      if (response.status === 201) {
        alert("건의사항이 작성 되었습니다.");
        navigate("/suggestion");
      }
    } catch (e) {
      alert("건의사항 작성에 실패하였습니다.");
    }
  };
  return (
    <>
      <AIS.AiServiceDetailCommentWrap>
        <S.CommuntiyCreateHeader> 건의사항 작성</S.CommuntiyCreateHeader>
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
            *서비스 선택은 선택사항 입니다.
          </S.SelcetorDescriptionText>
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
        <S.CommunityCreateTitle
          placeholder="참고가능한 링크를 입력해주세요"
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
