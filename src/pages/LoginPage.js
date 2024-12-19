import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/LoginForm';
import Layout from '../layouts/Layout';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // useHistory 훅 사용
  
  const handleLogin = (status) => {
    if (status){
      navigate('/');
    }else{
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
    setIsLoggedIn(status);
  };

  return (
    <div class="container">

        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">

                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <img src="https://us.123rf.com/450wm/jabkitticha/jabkitticha1702/jabkitticha170200453/72836304-%ED%94%84%EB%9E%9C%EC%B0%A8%EC%9D%B4%EC%A6%88-%EC%82%AC%EC%97%85.jpg?ver=6" 
                                     alt="restaurant" 
                                     class="img-fluid" />
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">{process.env.REACT_APP_NAME}</h1>
                                    </div>
                                    <LoginForm onLogin={handleLogin} />
                                    <hr />
                                    {/* <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Create an Account!</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  );
};

export default LoginPage;
