import React, { useEffect, useState } from 'react';
import './Users.css';
import NavBar from '../Layout/Sidebar/Item';
import Nav from '../Layout/Sidebar/Nav';
import axios from 'axios';
import { Headers, URL, GetParam } from '../../Database/Database';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User(param) {
    const navigate = useNavigate();
    const [Id, SetId] = useState(0);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');
    const [UserLevelId, setUserLevelId] = useState(1);

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

    async function Submit() {
        const User = { Id: Id, Name: Name, Email: Email, Login: Login, Password: Password, UserLevelId: UserLevelId };
        if (User.Id == 0) Insert(User);
        else Update(User);
    }

    async function Delete() {
        try {
            await axios.delete(`${URL}User/${Id}`).then((response) => {
                Success(`Usuario deletado com sucesso`);
                navigate("/");
            });
        } catch (response) {
            Error(`Erro ao deletar Usuário.`);
        }
    }

    async function Update(User) {
        try {
            await axios.put(`${URL}User/${User.Id}`, User).then((response) => {
                Success(`Usuario atualizado com sucesso.`);
            });
        } catch (response) {
            Error(`Erro ao atualizar Usuário.`);
        }
    }

    async function Insert(User) {
        try {
            await axios.post(`${URL}User/`, User).then((response) => {
                Success(`Usuario cadastrado com sucesso.`);
                navigate("/");
            });
        } catch (response) {
            Error(`Erro ao atualizar Usuário.`);
        }
    }

    async function UserById(id) {
        try {
            await axios.get(`${URL}User/${id}`, { headers: Headers }).then((response) => {
                SetId(response.data.id);
                setName(response.data.name);
                setEmail(response.data.email);
                setLogin(response.data.login);
                setPassword(response.data.password);
                setUserLevelId(response.data.userLevelId);
            });
        } catch (err) {
            return [];
        }
    };

    useEffect(() => {
        const param = GetParam('id');
        if (param != undefined || param != '') {
            UserById(param);
        }
    }, [])

    return (
        <div className="Sidebar">
            <div id="wrapper">
                <ToastContainer />
                <NavBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <Nav />
                    <div id="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='card shadow mb-4'>
                                        <div className='card-header py-3'>
                                            <h4 className="modal-title">Alteração de cadastro / <span className="text-primary">Usuário</span></h4>
                                        </div>
                                        <div className='card-body'>
                                            <div className="row">
                                                <div className="form-group col-lg-12">
                                                    <label className="font-weight-bold text-small" >Nome Completo<span className="text-primary ml-1">*</span></label>
                                                    <input onChange={(value) => { setName(value.target.value) }} value={Name} className="form-control" type="text" placeholder="Digite seu nome completo" />
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <label className="font-weight-bold text-small" >E-mail<span className="text-primary ml-1">*</span></label>
                                                    <input onChange={(value) => { setEmail(value.target.value) }} value={Email} className="form-control" type="email" placeholder="Digite seu E-mail" />
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <label className="font-weight-bold text-small" >Login de acesso<span className="text-primary ml-1">*</span></label>
                                                    <input onChange={(value) => { setLogin(value.target.value) }} value={Login} className="form-control" type="text" placeholder="Digite seu Login de acesso" />
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <label className="font-weight-bold text-small" >Senha<span className="text-primary ml-1">*</span></label>
                                                    <input onChange={(value) => { setPassword(value.target.value) }} value={Password} className="form-control" type="password" placeholder="Digite sua senha" />
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <label className="font-weight-bold text-small" >Nivel de Usuário<span className="text-primary ml-1">*</span></label>
                                                    <select className="form-control" onChange={(value) => { setUserLevelId(value.target.value) }} value={UserLevelId}>
                                                        <option value={1}>Admin</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <button onClick={Submit} className="btn btn-primary" type="button">Salvar alterações</button>
                                                    <button onClick={Delete} className="btn btn-danger space-button" type="button">Deletar Usuário</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
