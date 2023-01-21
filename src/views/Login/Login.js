import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Headers, URL, GetParam } from '../../Database/Database';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

const custom = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
};

function Success(message) {
    toast.success(message, custom);
}

function Error(message) {
    toast.error(message, custom);
}

async function Authentication(user) {
    try {
        await axios.post(`${URL}Login/`, user).then((response) => {
            console.log(response);
        });
    } catch (err) {
        return null;
    }
};

export default function Login() {

    const [Login, SetLogin] = useState('');
    const [Password, SetPassword] = useState('');
    const navigate = useNavigate();
    async function IsValidLogin(){
        const ob = {
            Login : Login,
            password: Password
        };
        //console.log(ob);
        //console.log(await Authentication(ob));

        if(ob.Login !="" && ob.Password !=""){
            //navigate("/");
            Error("Usuário ou senha inválido");
        }
        
    }

    return (
        <div className="container">
        <div className="card card-container">     <h1 className='text-center'>ENTRAR</h1><br/>
        <img className="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
       
            <p className="profile-name-card"></p>
            <div className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input onChange={(value)=>SetLogin(value.target.value)} type="email" className="form-control" placeholder="Login"/>
                <input onChange={(value)=>SetPassword(value.target.value)} type="password" className="form-control" placeholder="Senha"/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Lembrar-me
                    </label>
                </div>
                <button onClick={IsValidLogin} className="btn btn-lg btn-primary btn-block btn-signin">Entrar</button>
            </div>
        </div>
    </div>
    );
}