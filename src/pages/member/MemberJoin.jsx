import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MemberJoinService from "../../service/MemberService";
import { useNavigate } from "react-router-dom";
import '../../styles/member/MemberJoin.css'

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

  const moveLogin = async (event) => {
    navigate("/login/member");
  };

  const moveJoin = async (event) => {
    navigate("/join/member");
  };

  return (
    <Layout pageName="회원가입">
      <div id="loginWrap">
        <div style={{height: "820px"}}>
          <div id="pageMove">
            <button onClick={moveLogin} style={{backgroundColor: '#d6d6d6'}}>로그인</button>
            <button onClick={moveJoin} style={{backgroundColor: '#F1F9FA'}}>회원가입</button>
          </div>
          <form onSubmit={onSubmitHandler}>
          <div className="input">
            <div>
              <div>아이디 :</div>
              <input
                type="text"
                placeholder="아이디"
                name="nickname"
                value={state.nickname}
                onChange={onNicknameHandler}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <div>비밀번호 :</div>
              <input
                type="password"
                placeholder="비밀번호"
                //   name="password"
                value={state.password}
                onChange={onPasswordHandler}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <div>이 름 :</div>
              <input
                type="text"
                placeholder="이름"
                //   name="username"
                value={state.userName}
                onChange={onUserNameHandler}
              />
            </div>
            <div>
          </div>
          <div className="input">
              <div>생  일 :</div>
              <input
                type="text"
                placeholder="1999-01-01"
                //   name="birth"
                value={state.birth}
                onChange={onBirthHandler}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <div>이메일 :</div>
              <input
                type="text"
                placeholder="abc@naver.com"
                //   name="email"
                value={state.email}
                onChange={onEmailHandler}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <div>주  소 :</div>
              <input
                type="text"
                placeholder="주소"
                //   name="address"
                value={state.address}
                onChange={onAddressHandler}
              />
            </div>
          </div>
          <div className="input">
            <div>
              <div id="genderBox">성  별 :</div>
              {/* <input type="text" placeholder="성별" value={state.gender} onChange={onGenderHandler} /> */}
              <div id="radioWrap">
                <div className="genderSelect"><input type="radio" name="gender" value="남자" onChange={onGenderHandler} defaultChecked checked={state.gender === "남자"} />&nbsp;남</div>
                <div className="genderSelect"><input type="radio" name="gender" value="여자" onChange={onGenderHandler} checked={state.gender === "여자"} />&nbsp;여</div>
              </div>
            </div>
          <div className="input"></div>
            <div>
              <div>전화번호 :</div>
              <input
                type="text"
                placeholder="01000000000"
                //   name="phoneNumber"
                value={state.phoneNumber}
                onChange={onPhoneNumberHandler}
              />
            </div>
          </div>
            <br />
            <div className="btnWrap">
              <button className="btn text-white" onClick={createMember}>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
