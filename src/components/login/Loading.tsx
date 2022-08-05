import React from 'react';
import "./Loading.css";


const Loading = () => {
  return (
    <>
      <div className="loading">
        <h1>로딩중입니다.<br/>잠시만 기다려주세요.</h1>
        <div className="circle">
          <span></span>
        </div>
        <div className='alicn-c'>
          <img src="/img01.jpeg" alt="123" />
        </div>
      </div>
    </>
  );
};

export default Loading;