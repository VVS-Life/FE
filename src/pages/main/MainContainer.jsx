import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      './images/slide1.png',
      './images/slide2.png',
      './images/slide3.jpg',
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % slides.length);
        }, 3000); // 3초마다 슬라이드 변경
    
        return () => clearInterval(slideInterval);
      }, [currentSlide]);    

    return (
        <div className="mainContainer">
            <div className="mainImg">
            </div>
            <div className="freqUsedMenuBox">
                    <div className="freqUsedMenu">
                        <Link to = "/subscription"><img src="./images/find_myList.png" alt="myList" className="freqUsedImg"/></Link>
                        <div className="freqText">가입내역조회</div>
                    </div>
                    <div className="freqUsedMenu">
                        <Link to = "/csMain"><img src="./images/chat.png" alt="chat" className="freqUsedImg"/></Link>
                        <div className="freqText">채팅상담</div>
                    </div>
                    <div className="freqUsedMenu">
                        <Link to = "/"><img src="./images/appInfo.png" alt="appInfo" className="freqUsedImg"/></Link>
                        <div className="freqText">앱안내</div>
                    </div>
            </div>
            <div className="mainBanner">
                {slides.map((slide, index) => (
                    <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainContainer