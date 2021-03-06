import React, { useState } from 'react';
import './login.css';
import { MdLock, MdAssignmentInd } from "react-icons/md";
import iconLogin from "./icon-login.png";
import facebook from "./face.png";
import linkedin from "./link.png";
import google from "./google.png";

const Login = () => {

    return <>
        <div className="login">
            <div className="container-principal">

                <div className="icon-login">
                    <img src={iconLogin} />
                    <h1>LOGIN</h1>
                </div>

                <div className="input-login">
                    <MdAssignmentInd className="icon-user"  />
                    <input type="text" className="login" placeholder="Login"></input>
                </div>

                <div className="input-senha">
                    <MdLock className="icon-senha" />
                    <input type="password" className="senha" placeholder="Senha"></input>
                </div>
                <div  className="container-btn">
                    <button>Entrar</button>
        
                 </div>
                 <div className="links">
                 <p>Esqueceu a senha?<a href="#">Clique aqui</a></p>
                 </div>

                 <div className="cadastrar">
                 <p>Não possui cadastro?<a href="#">Clique aqui</a></p>
                 </div>
                 
                 <div className="sociais">
                     <h1>Entrar com</h1>
                    <div>
                        <a href="#"><img src={facebook}></img> </a>
                        <a href="#"><img src={linkedin}></img></a>
                        <a href="#"><img src={google}></img></a>
                    </div> 
                   
                </div>

            </div>
        </div>
    </>
}

export default Login;
