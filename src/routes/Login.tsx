import React, { useState } from 'react';
import Loading from '../components/login/Loading';
import LoginMain from '../components/login/LoginMain';


const Login = () => {
  const [loading ,setLoading ] = useState(true);
  const [id,setId] = useState("");
  const [pw,setPw] = useState("");
  const submit = ()=>{
    console.log(id,pw);
  }

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      {loading ? <Loading/> : <LoginMain
                                 propsId={id} 
                                 propsPw={pw}
                                 propsIdFn={setId}
                                 proptsPwFn={setPw}   
                                 submit={submit}
                              />
      }                      
    </>
  );
};

export default Login;