import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"
import '../../styles/cs/csMain.css';

const BoxCard = ({ title, link, imgURL, name, text}) => {
    const linkWithSlash = `/${link}`;
    const img = `./${imgURL}`

  return (
    <Link to={linkWithSlash} className={"csBoxCard"} id={name}>
        <img src={img} alt="img" className='boxImg'></img>
        <p className='boxTitle'>{title}</p>
        <p className='boxText'>{text}</p>
    </Link>
  );
}

const CsMain = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const jwtToken = localStorage.getItem('Authorization');

     // jwtToken이 존재하면 로그인 상태로 설정
     useEffect(() => {
        if (jwtToken) {
            setIsLoggedIn(true);
        }
    }, [jwtToken]);

    return (
        <>
            <Layout pageName='고객센터'>
                {isLoggedIn ? (
                    // 로그인 상태일 때
                    <>
                        <div className="csBoxCardList">
                            <div  className='csListBox'>
                                <BoxCard title="채팅상담" link="chat" imgURL="./images/chat.png" name="chat" text="문의, 민원, 칭찬, 제안을 채팅으로 상담하실 수 있어요."/>
                            </div>
                            <div  className='csListBox'>
                                <BoxCard title="문의게시판" link="boardList" imgURL="./images/board.jpg" name="boardList" text="궁금한 사항들을 게시판에서 문의하실 수 있어요."/>
                            </div>
                            <div  className='csListBox'>
                                <BoxCard title="가입내역조회" link="subscription" imgURL="./images/find_myList.png" name="subsList" text="보험 가입내역을 한 번에 조회하실 수 있어요."/>
                            </div>
                        </div>
                    </>
                    ) : (
                    // 비로그인 상태일 때
                    <>
                        <div className="csBoxCardList">
                            <div  className='csListBox'>
                                <BoxCard title="채팅상담" link="login/member" imgURL="./images/chat.png" name="chat" text="문의, 민원, 칭찬, 제안을 채팅으로 상담하실 수 있어요."/>
                            </div>
                            <div  className='csListBox'>
                                <BoxCard title="문의게시판" link="login/member" imgURL="./images/board.jpg" name="boardList" text="궁금한 사항들을 게시판에서 문의하실 수 있어요."/>
                            </div>
                            <div  className='csListBox'>
                                <BoxCard title="가입내역조회" link="login/member" imgURL="./images/find_myList.png" name="subsList" text="보험 가입내역을 한 번에 조회하실 수 있어요."/>
                            </div>
                        </div>
                    </>
                )}
                <div className='csBottom'>
                    <img src='./images/csBottom.jpg'className='bottomImg'/>
                </div>
            </Layout>
        </>
    )
}

export default CsMain
