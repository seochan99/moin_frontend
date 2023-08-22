import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Icon from "../../../../assets/images/icon/loginModalMoin.png";

function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const NonUserSubmit = () => {
    navigate("/login");
    return;
  };

  return (
    <S.NotUserDeleteModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="비회원 로그인 모달창"
      ariaHideApp={false}
    >
      <S.NotUserModalContentWrap>
        <S.NotUserDeleteModalContentIcon src={Icon} alt="나의 후기 아이콘" />
        <S.ModalContentTitle>로그인이 필요한 서비스입니다.</S.ModalContentTitle>
        <S.ModalContentButtonWrap>
          <S.NotUserModalContentButtonConfirm onClick={NonUserSubmit}>
            로그인
          </S.NotUserModalContentButtonConfirm>
          <S.NotUserModalContentButtonCancle onClick={onClose}>
            취소
          </S.NotUserModalContentButtonCancle>
        </S.ModalContentButtonWrap>
      </S.NotUserModalContentWrap>
    </S.NotUserDeleteModal>
  );
}

export default LoginModal;
