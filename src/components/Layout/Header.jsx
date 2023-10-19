import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };
    
    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    const items1 = [
        { id: 1, text: '종신/정기보험', 
            subItems: ['든든한 실속 종신보험(무배당, 보증비용부과형)[해약환급금 일부지급형]','슬기로운(남성 · 여성)케어종신보험 (무배당, 해약환급금 일부지급형)',''] },
        { id: 2, text: '연금/저축보험', 
            subItems: [''] },
        { id: 3, text: '변액보험', 
            subItems: ['모으고 키우는 변액적립보험 v2.0(무배당)','모으고 키우는 변액연금보험(무배당)','신한 모으고 키우는 변액연금보험(무배당)','멀티라이프 변액유니버설종신보험(무배당)'] },
        { id: 4, text: '건강보험', 
            subItems: ['홈닥터 의료비보장보험(무배당, 갱신형)','케어받는 암보험(무배당, 갱신형)','참좋은 치아보험PlusⅡ(무배당, 갱신형)'] },    
    ];
    const items2 = [
        { id: 1, text: '문의게시판', 
            subItems: [''] },
        { id: 2, text: '채팅', 
            subItems: [''] },
        { id: 3, text: '가입내역조회', 
            subItems: [''] },  
    ];
    const items3 = [
        { id: 1, text: '질병 진단 서비스', 
            subItems: [''] },
    ];
  
    return (
        <><header className='header'>
            <div className='headerContents'>
                <div>
                    <Link to = "/"><img src="./images/VVS_LOGO_NU.png" alt="vvs" className="logoStyle"/></Link>
                </div>
                <nav className="navigation">
                        <ul className='menuBox'>
                            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                <Link to="/productList" className="navStyle" id='products'>보험상품</Link>
                            </li>
                            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                <Link to="/memberServices" className="navStyle" id='clientCenter'>고객센터</Link>
                            </li>
                            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                <Link to="/healthCare" className="navStyle" id='healthCare'>헬스케어 서비스</Link>
                            </li>
                        </ul>
                </nav>
                <div>
                    <Link to = "/login/member" className="topMenu">로그인</Link>
                    <Link to = "/logout" className="topMenu">로그아웃</Link>
                    <Link to = "/subscription" className="topMenu">가입관리</Link>
                    <Link to = "/boardList?page=0&size=10" className="topMenu">문의</Link>
                </div>
            </div>
            <div className={`subNavigation ${isMouseOver ? 'expanded' : ''}`}>       
                <div className='headerContents'>
                    <div>
                        <Link to = "/"><img src="./images/VVS_LOGO.jpg" alt="vvs" className="logoStyle"/></Link>
                    </div>
                    <nav className="navigation"> 
                            <ul className='menuBox'>
                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                    <Link to="/productList" className="navStyle2" id='products2'>보험상품</Link>
                                    <ul className='navItem'>
                                        {items1.map(item => (
                                            <li key={item.id} className='subMenuTitle'>
                                                <Link to="/product/${item.id}" className="category" >{item.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                    <Link to="/memberServices" className="navStyle2" id='clientCenter2'>고객센터</Link>
                                    <ul className='navItem'>
                                        {items2.map(item => (
                                            <li key={item.id} className='subMenuTitle'>
                                                <Link to="/product/${item.id}" className="category" >{item.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='subMenu'>
                                    <Link to="/healthCare" className="navStyle2" id='healthCare2'>헬스케어 서비스</Link>
                                    <ul className='navItem'>
                                        {items3.map(item => (
                                            <li key={item.id} className='subMenuTitle'>
                                                <Link to="/product/${item.id}" className="category" >{item.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                    </nav>
                    <div>
                        <Link to = "/login/member" className="topMenu2">로그인</Link>
                        <Link to = "/logout" className="topMenu2">로그아웃</Link>
                        <Link to = "/subscription" className="topMenu2">가입관리</Link>
                        <Link to = "/boardList?page=0&size=10" className="topMenu2">문의</Link>
                    </div>
                </div>
                </div>
        </header> 
        <div className='pageName'>
            - {props.pageName} -
        </div>
        </>
    )
}

export default Header;
