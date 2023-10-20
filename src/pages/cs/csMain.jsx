import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"
import '../../styles/cs/csMain.css';

const BoxCard = ({ title, link, imgURL, text}) => {
    const linkWithSlash = `/${link}`;
    const img = `./${imgURL}`
  return (
    <Link to={linkWithSlash} className="csBoxCard" id={link}>
        <img src={img} alt="img" className='boxImg'></img>
        <p className='boxTitle'>{title}</p>
        <p className='boxText'>{text}</p>
    </Link>
  );
}

const CsMain = () => {

    return (
        <>
            <Layout pageName='고객센터'>
                <div className="boxCardList">
                    <div  className='csListBox'>
                        <BoxCard title="채팅상담" link="chat" imgURL="./images/chat.png" text="문의, 민원, 칭찬, 제안을 채팅으로 상담하실 수 있어요."/>
                    </div>
                    <div  className='csListBox'>
                        <BoxCard title="문의게시판" link="boardList" imgURL="./images/board.jpg" text="궁금한 사항들을 게시판에서 문의하실 수 있어요."/>
                    </div>
                    <div  className='csListBox'>
                        <BoxCard title="가입내역조회" link="subscription" imgURL="./images/find_myList.png" text="보험 가입내역을 한 번에 조회하실 수 있어요."/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CsMain
