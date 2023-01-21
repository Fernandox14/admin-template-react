import React, { useEffect, useState } from 'react';
import { Header, Footer, HeaderText } from '../Layout/Utils/Utils';
import { Headers, URL } from '../../Database/Database';
import NavBar from '../Layout/Sidebar/Item';
import Nav from '../Layout/Sidebar/Nav';
import './Users.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Home() {
    const HeaderAndFooter = ['Código', 'Nome', 'Email', 'Nivel de Usuário', 'Login', 'Ação']
    const [All, setUsers] = useState([]);

    async function Users(){
        try {
            await axios.get(URL + 'User', {headers: Headers}).then((response)=>{setUsers(response.data)});
        } catch (err) {
            return [];
        }
    };

    useEffect(()=>{
        Users();
    })

    return (
        <div className="Sidebar">
            <div id="wrapper">
                <NavBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <Nav />
                    <div id="content">
                        <div className="container-fluid">
                            <div>
                                <h1 className="h3 mb-2 text-gray-800">Usuários</h1>
                                <div className='header-table'>
                                    <p className="mb-4">Todos os Usuários cadastrados na base de dados</p>
                                    <Link to="/user" 
                                    className='btn btn-primary size-button'>Novo Registro</Link>
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Usuários cadastrados</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable">
                                            <Header Header={HeaderAndFooter} />
                                            <Footer Footer={HeaderAndFooter} />
                                            <tbody>
                                                {All.map((ob) =>
                                                    <tr key={ob.id}>
                                                        <td>{ob.id}</td>
                                                        <td>{ob.name}</td>
                                                        <td>{ob.email}</td>
                                                        <td>{ob.userLevel.name}</td>
                                                        <td>{ob.login}</td>
                                                        <td>
                                                            <Link to={`/user?id=${ob.id}`} className='btn btn-primary'>Alterar</Link>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}