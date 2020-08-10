import React from 'react'
import './styles.css';

function Footer(){
    return(
        <div className="footer">
            <div className="start">
                <h2>Quer começar do zero?</h2>
                <div className="button">
                <button>Crie um pipe personalizado</button>
                </div>
            </div>
            <footer>
                <div className="options">
                    <div className="links">
                        <h1 className="titleOption">Produto</h1>
                    <a href="#">Visão geral do produto</a>
                    <a href="#">Funcionalidades</a>
                    <a href="#">Preços</a>
                    <a href="#">Estudos de casos</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Soluções</h1>
                    <a href="#">Gerenciamento de processos</a>
                    <a href="#">Desenvolvimnto</a>
                    <a href="#">TI</a>
                    <a href="#">Visão geral do produto</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Modelos</h1>
                    <a href="#">Funil de vendas</a>
                    <a href="#">Onboarding de clientes</a>
                    <a href="#">Pedido de compras</a>
                    <a href="#">Recrutamento</a>
                    <a href="#">Solicitações de marketing</a>
                    <a href="#">Growth Hacking</a>
                    <a href="#">Roadmap de produto</a>
                    <a href="#">Atendimento ao Cliente</a>
                    <a href="#">Chamados de TI</a>
                    <a href="#">Veja todos</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Ajuda e Suporte</h1>
                    <a href="#">Centro de ajuda</a>
                    <a href="#">Webinars</a>
                    <a href="#">Fale com Vendas</a>
                    <a href="#">Programa de Certtificações</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Recursos e Conteúdo</h1>
                    <a href="#">Avaliação Processo Organizacional</a>
                    <a href="#">Blog</a>
                    <a href="#">Guias & E-books</a>
                    <a href="#">Mapa do site</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Empresa</h1>
                    <a href="#">Sobre nós</a>
                    <a href="#">Vagas</a>
                    <a href="#">Investidores</a>
                    <a href="#">Newsroom</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Privacidade</h1>
                    <a href="#">Termos de uso</a>
                    <a href="#">Política de privacidade</a>
                    <a href="#">Privacy Shield Policy</a>
                    </div>
                    <div className="links">
                        <h1 className="titleOption">Parceiros</h1>
                    <a href="#">Programa de Parceiros</a>
                    <a href="#">Desenvolvedores</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;