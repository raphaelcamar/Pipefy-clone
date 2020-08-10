import React, { useState, useEffect } from 'react';
import './styles.css';
import Card from '../Card';

import { Link } from 'react-router-dom';

function SearchItem(){

    const[focus, setFocus] = useState([false]);

    return(
        <>
        <div className="searchItem">
            <div className="topic">
            <p><strong>Modelos de processos</strong>/ Customer Service</p>
            </div>
             <div className="search">
                    <input className="input" type="text" placeholder="Busca"/>
                </div>      
        </div>
     
        </>
    )
}

export default SearchItem;





    
//     const {Financeiro, Marketing, Vendas, Desenvolvimento, TI, Outros} = Api[0].items
//     const CustomerService =  Api[0].items["Customer Service"];
//     const RecursosHumanos = Api[0].items["Recursos Humanos"];
//     const arr  = [Financeiro, Marketing, Vendas, Desenvolvimento, TI, Outros, CustomerService, RecursosHumanos];

    
//     const valueTopics = Api.map(item =>{
//         return Object.keys(item.items);
//     });
//    const sp = valueTopics[0].splice(0, Number.MAX_VALUE);