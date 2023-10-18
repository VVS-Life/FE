import React, { useState } from 'react';
import '../../styles/Healthcare.css'
import NetworkCause from './NetworkCause';
import NetworkResult from './NetworkResult';
import Layout from "../../components/Layout/Layout"

export default function Healthcare() {
    const [showCause, setShowCause] = useState(true);
    const [showResult, setShowResult] = useState(false);
    
    const handleCauseButtonClick = () => {
        setShowCause(true);
        setShowResult(false);
    };
    
    const handleResultButtonClick = () => {
        setShowCause(false);
        setShowResult(true);
    };
    
    return (
        // props로 페이지 이름을 넣어주면 header에 표시된다.
        <Layout pageName='헬스케어 서비스'>
            <div className='page'>
                <div className='introWrap'>
                    <h1>질병원인/증상 탐색 서비스</h1>
                    <div>본 서비스는 인식률이 낮은 질병의 잠재적 원인과 증상을 파악하여 예방과 진단에 기여하고자 개발한 서비스입니다. </div>
                    <div>의료논문 DB로부터 데이터를 추출하였으며 자연어처리 기술을 활용해 관련 질병의 잠재 원인과 증상을 파악하였습니다. </div>
                    <div>이후 잠재 원인과 증상을 직관적으로 알아보고자 네트워크를 통해 표현 하였으며, 아래 서비스를 통해 간접접으로 체험해보실 수 있습니다.</div>
                </div>

                <div className='contentWrap'>
                    <div className='contentWrapTop'>
                        <h2>잠재 인과 네트워크</h2>
                        <hr />
                    </div>
                    <div className='contentWrapBottom'>
                        <div className='inputDisease'>
                            <span>Q. 어떤 질병을 검색할까요?</span>
                            <input placeholder=" ex) insomnia" ></input>
                            <button>검 색</button>
                        </div>
                        <div className='networkWrap'>
                            <button className='networkButton' style={{backgroundColor: showCause ? '#fffff4' : '#E6DFD4'}} onClick={handleCauseButtonClick}>잠재 원인 찾기</button>
                            <button className='networkButton' style={{backgroundColor: showResult ? '#fffff4' : '#E6DFD4'}} onClick={handleResultButtonClick}>잠재 증상 찾기</button>
                            {showCause && <NetworkCause />}
                            {showResult && <NetworkResult />}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}