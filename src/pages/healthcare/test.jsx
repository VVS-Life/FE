import React from 'react';
import NetworkCause from './NetworkCause'; // 파일 경로를 실제 파일 위치에 맞게 수정
import NetworkResult from './NetworkResult'; // 파일 경로를 실제 파일 위치에 맞게 수정

function MainComponent() {
  return (
    <div>
      <div>
        <NetworkCause />
      </div>
      <div>
        <NetworkResult />
      </div>
    </div>
  );
}

export default MainComponent;
