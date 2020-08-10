import React from 'react';
import './styles.css';
import pipyefyLogo from '../../assets/icons/pipefy-logo-black.png';


function Header(){

            return (
                <div className="header">
                <div className="content">
                    <img src={pipyefyLogo} alt=""/>
                    <p>Soluções</p>
                    <p>Funcionalidades</p>
                    <p>Templates</p>
                    <p>Preços</p>
                </div>
                <div className="content">
                    <p>Fale com vendas</p>
                    <p>Compre agora</p>
                    <p className="free">Pipefy grátis</p>
                    <p>Entrar</p>
                </div>  
            </div>
            )
        }

export default Header;