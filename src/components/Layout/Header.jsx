import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <><header className='header'>
            <div className='headerContents'>
                <div>
                    <img src="./images/VVS_LOGO_Header.png" alt="vvs" className="logoStyle"/>
                </div>
                <nav className='navigation'>
                    <ul>
                            <li><Link to = "/products" className="navStyle">보험상품</Link></li>
                            <li><Link to = "/memberServices" className="navStyle">고객센터</Link></li>
                            <li><Link to = "/healthCare" className="navStyle">헬스케어 서비스</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to = "/login" className="topMenu">로그인</Link>
                    <Link to = "/logout" className="topMenu">로그아웃</Link>
                    <Link to = "/subscription" className="topMenu">가입관리</Link>
                    <Link to = "/board" className="topMenu">공지</Link>
                </div>
            </div>
            
        </header> 
        <div className='pageName'>
            - {props.pageName} -
        </div>
        </>
    )
}

export default Header