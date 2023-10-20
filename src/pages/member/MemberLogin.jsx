import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MemberService from "../../service/MemberService";
import { useNavigate, Link } from "react-router-dom";
import '../../styles/member/MemberLogin.css'

export default function MemberLogin() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    nickname: "",
    password: "",
  });

  const onNicknameHandler = (event) => {
    setState({ ...state, nickname: event.target.value });
  };
  const onPasswordHandler = (event) => {
    setState({ ...state, password: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const loginMember = async (event) => {
    event.preventDefault();
    let data = {
      nickname: state.nickname,
      password: state.password,
    };

    try {
      const res = await MemberService.loginMember(data);
      alert("로그인 성공");
      let jwtToken = res.headers.get("Authorization");
      localStorage.setItem("Authorization", jwtToken);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("로그인 실패");
    }
  };

  const moveLogin = async (event) => {
    navigate("/login/member");
  };

  const moveJoin = async (event) => {
    navigate("/join/member");
  };

  return (
    <Layout pageName="로그인" id="page">
      <div id="loginWrap">
        <div style={{height: "480px"}}>
        <div id="pageMove">
          <button onClick={moveLogin} style={{backgroundColor: '#FFFFFF'}}>로그인</button>
          <button onClick={moveJoin} style={{backgroundColor: '#e4e4e4'}}>회원가입</button>
        </div>
          <form onSubmit={onSubmitHandler}>
            <div className="input" id="inputId">
              <div>
                <div>아 이 디 :</div>
                <input
                  type="text"
                  placeholder="아이디"
                  name="nickname"
                  value={state.nickname}
                  onChange={onNicknameHandler}
                />
              </div>
            </div>
            <div className="input" id="inputPw">
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
            <br />
            <div className="btnWrap">
              <button className="btn text-white" onClick={loginMember}>로그인</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
