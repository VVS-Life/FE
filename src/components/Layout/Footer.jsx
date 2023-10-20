const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContents'>
                <div className="footerBox">
                    <img src="./images/VVS_LOGO_WG.jpg" alt="vvs" className="footerLogo"/>
                    <hr/>
                    <div className="footerText">"내 삶을 가치있게"</div>
                </div>
                <div className="footerMenu">
                </div>
                <div className="footerMenu">
                    <div className="menuTitle">보험상품</div>
                    <div className="menu">
                        <div>종신/정기보험</div>
                        <div>연금/저축보험</div>
                        <div>변액보험</div>
                        <div>건강보험</div>
                    </div>
                </div>
                <div className="footerMenu">
                    <div className="menuTitle">고객센터</div>
                    <div className="menu">
                        <div>문의게시판</div>
                        <div>채팅상담</div>
                        <div>가입내역조회</div>
                    </div>
                </div>
                <div className="footerMenu">
                    <div className="menuTitle">헬스케어 서비스</div>
                    <div className="menu">
                        <div>질병진단서비스</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="title">
                <div className="sns">
                    <img src="./images/sns.png" alt="sns"/>
                </div>
                <div className="footerInfo">
                    <div>(주) VVS라이프  |  CEO: 강혜광  |  고객센터: 02-1111-2222  |  이메일: help@vvslife.co.kr</div>
                    <div> 주소: 서울 금천구 가단디지털1로 168, 우림라이온스밸리 B동 1207호</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer