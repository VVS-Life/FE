import React from "react";
import Layout from "../../components/Layout/Layout";
import '../../styles/subscription/Complete.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Complete() {
    const navigate = useNavigate();
  
    const toMain = async (event) => {
        event.preventDefault();
        navigate("/");
      };

  return (
    <Layout pageName="보험 신청 완료">
        <h1 className="completeText">신청해주셔서 감사합니다</h1>
        <div className="btn-div" id="btnWrap">
          <button className="btn text-white" onClick={toMain} >메인으로 이동</button>
          <button className="btn text-white" onClick={()=>{}} >가입 내역으로 이동</button>
        </div>
    </Layout>
  );
}
