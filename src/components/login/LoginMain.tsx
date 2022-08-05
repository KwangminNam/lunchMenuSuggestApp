import React, { InputHTMLAttributes, useState } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import "./Loading.css"

interface ProptsType{
  propsId: string,
  propsPw: string,
  proptsPwFn :(propsPw:string)=> void,
  propsIdFn :(propsId:string)=> void,
  submit: ()=> void
}

const LoginMain = ({propsId,propsPw,proptsPwFn,propsIdFn,submit} :ProptsType) => {

  return (
    <div>
      <div className="loginMain">
        <section className='idAndPw'>
          <div className='id'>
            <label htmlFor="id">id</label>
            <input 
              type="text"
              placeholder='id를입력' 
              id='id' 
              autoFocus 
              maxLength={10}
              onChange={(e)=>{propsIdFn(e.target.value)}}
              value={propsId}
            />
          </div>
          <div className='pw'>
            <label htmlFor="pw" >password</label>
            <input type="password" 
              id="pw" 
              onChange={(e)=>{proptsPwFn(e.target.value)}}
              value={propsPw}
            />
          </div>
          <div className='buttonWrap'>
            <button className="button" onClick={submit}>로그인</button>
          </div>
        </section>
        <section className='wannaJoin'>
          <span>처음이신가요</span>
          <Link to="./join">회원가입</Link>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LoginMain;