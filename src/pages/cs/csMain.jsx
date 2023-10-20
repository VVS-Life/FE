import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"
import '../../styles/cs/csMain.css';

const BoxCard = ({ title, link, imgURL }) => {
    const linkWithSlash = `/${link}`;
    const img = `./${imgURL}`
  return (
    <Link to={linkWithSlash} className="csBoxCard" id={link}>
        <img src={img} alt="img" className='boxImg'></img>
        <p>{title}</p>
        <p>{link}</p>
    </Link>
  );
}

const CsMain = () => {

    return (
        <>
            <Layout pageName='고객센터'>
                <div className="boxCardList">
                    <div  className='csListBox'>
                        <BoxCard title="채팅상담" link="chat" imgURL="./images/chat.png"/>
                    </div>
                    <div  className='csListBox'>
                        <BoxCard title="문의게시판" link="boardList" imgURL="./images/board.jpg"/>
                    </div>
                    <div  className='csListBox'>
                        <BoxCard title="가입내역조회" link="subscription" imgURL="./images/find_myList.png"/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CsMain
