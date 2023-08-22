import React, { useState } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import * as CS from "../communityCreatePost/style";
import { useLocation, useNavigate } from "react-router-dom";

import CommuntiyDetailPageType from "../communtiyDetailPageType/CommuntiyDetailPageType";

import { FileDrop } from "react-file-drop";
import MDEditor from "@uiw/react-md-editor";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function CommunityEdit() {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.detail.title);
  const [value, setValue] = useState(state.detail.content);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
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

    const headers = { "Content-Type": image.type };

    try {
      const response = await axios.post("upload-image", formdata, { headers });
      const image_url = "https://moin.dcs-hyungjoon.com/media/" + image.name;
      const imageName = image_url.substring(image_url.lastIndexOf("/") + 1);
      const newValue = value + `\n\n![${image.name}](${image_url})`;
      setValue(newValue);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClickWrite = async () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    try {
      const accessToken = user.accessToken;
      const headers = { Authorization: `Bearer ${accessToken}` };
      const data = {
        ai: state.detail.ai,
        category: state.detail.category,
        title: title,
        content: value
      };

      const response = await axios.patch(
        `communities/posts/${state.detail.id}`,
        data,
        { headers }
      );

      if (response.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      alert("게시글 수정에 실패하였습니다.");
    }
  };

  return (
    <>
      <S.EditWraaper>
        <CommuntiyDetailPageType type={``} aiName={null} />

        <CS.CommunityCreateTitle
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
        <CS.ButtonWrapper>
          <CS.CommunityCreateButton
            onClick={() => {
              navigate(-1);
            }}
            style={{
              marginRight: "1rem"
            }}
          >
            수정 취소
          </CS.CommunityCreateButton>
          <CS.CommunityCreateButton onClick={handleClickWrite}>
            수정완료
          </CS.CommunityCreateButton>
        </CS.ButtonWrapper>
      </S.EditWraaper>
    </>
  );
}

export default CommunityEdit;
