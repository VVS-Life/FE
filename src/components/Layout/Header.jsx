import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='mainImage'>
                <div className='headerContents'>
                    <div>
                        <img src="./images/VVS_LOGO_3.jpg" alt="vvs" className="logoStyle"/>
                    </div>
                    <nav className='navigation'>
                        <ul>
                                <li><Link to = "/products" className="navStyle">보험상품</Link></li>
                                <li><Link to = "/memberServices" className="navStyle">고객센터</Link></li>
                                <li><Link to = "/healthCare" className="navStyle">헬스케어 서비스</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Link to = "/login" className="login">로그인</Link>
                        <Link to = "/info" className="info">공지</Link>
                    </div>
                </div>
            </div>
        </header> 
    )
}

export default Header