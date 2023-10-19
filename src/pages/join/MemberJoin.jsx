import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MemberJoinService from "../../service/MemberService";
import { useNavigate } from "react-router-dom";

export default function MemberJoin() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    nickname: "",
    password: "",
    userName: "",
    birth: "",
    email: "",
    address: "",
    gender: "",
    phoneNumber: "",
  });

  const onNicknameHandler = (event) => {
    setState({ ...state, nickname: event.target.value });
  };
  const onPasswordHandler = (event) => {
    setState({ ...state, password: event.target.value });
  };
  const onUserNameHandler = (event) => {
    setState({ ...state, userName: event.target.value });
  };
  const onBirthHandler = (event) => {
    setState({ ...state, birth: event.target.value });
  };
  const onEmailHandler = (event) => {
    setState({ ...state, email: event.target.value });
  };
  const onAddressHandler = (event) => {
    setState({ ...state, address: event.target.value });
  };
  const onGenderHandler = (event) => {
    setState({ ...state, gender: event.target.value });
  };
  const onPhoneNumberHandler = (event) => {
    setState({ ...state, phoneNumber: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const createMember = async (event) => {
    event.preventDefault();
    let data = {
      nickname: state.nickname,
      password: state.password,
      userName: state.userName,
      birth: state.birth,
      email: state.email,
      address: state.address,
      gender: state.gender,
      phoneNumber: state.phoneNumber,
    };

    try {
      await MemberJoinService.createMember(data);
      alert("회원 가입이 완료되었습니다");
      navigate("/login/member");
    } catch (error) {
      console.error(error);
      alert("회원 가입에 실패했습니다");
    }
  };

  return (
    <Layout pageName="회원가입">
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>아이디</label>
            <input
              type="text"
              placeholder="아이디"
              name="nickname"
              value={state.nickname}
              onChange={onNicknameHandler}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              //   name="password"
              value={state.password}
              onChange={onPasswordHandler}
            />
          </div>
          <div>
            <label>이름</label>
            <input
              type="text"
              placeholder="이름"
              //   name="username"
              value={state.userName}
              onChange={onUserNameHandler}
            />
          </div>
          <div>
            <label>생일</label>
            <input
              type="text"
              placeholder="1999-01-01"
              //   name="birth"
              value={state.birth}
              onChange={onBirthHandler}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              type="text"
              placeholder="abc@naver.com"
              //   name="email"
              value={state.email}
              onChange={onEmailHandler}
            />
          </div>
          <div>
            <label>주소</label>
            <input
              type="text"
              placeholder="주소"
              //   name="address"
              value={state.address}
              onChange={onAddressHandler}
            />
          </div>
          <div>
            <label>성별</label>
            <input
              type="text"
              placeholder="성별"
              //   name="gender"
              value={state.gender}
              onChange={onGenderHandler}
            />
          </div>
          <div>
            <label>전화 번호</label>
            <input
              type="text"
              placeholder="01000000000"
              //   name="phoneNumber"
              value={state.phoneNumber}
              onChange={onPhoneNumberHandler}
            />
          </div>
          <br />
          <button onClick={createMember}>회원가입</button>
        </form>
      </div>
    </Layout>
  );
}
